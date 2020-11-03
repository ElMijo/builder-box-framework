import { Exception } from "../../../../src/app/errors"

describe("Testing Exception class", () => {
    const error = new Exception("E001", 400, "Bad request")
    test("Checking that the object is instantiable", () => {
        expect(error).toBeInstanceOf(Error)
        expect(error).toBeInstanceOf(Exception)
    })
    test("Checking __toString result", () => {
        expect("" + error).toBe("[E001]: Bad request")
    })
    test("Checking isA result when given correct and incorrect values", () => {
        expect(error.isA("Any")).toBeFalsy()
        expect(error.isA("Error")).toBeFalsy()
        expect(error.isA("Exception")).toBeTruthy()
    })
    test("Checking export result without context", () => {
        const exported = error.export()
        expect(exported).toHaveProperty("name")
        expect(exported).toHaveProperty("code")
        expect(exported).toHaveProperty("status")
        expect(exported).toHaveProperty("message")
        expect(exported).toHaveProperty("trace")
        expect(exported).toHaveProperty("context")

        expect(exported.name).toBe("Exception")
        expect(exported.code).toBe("E001")
        expect(exported.status).toBe(400)
        expect(exported.message).toBe("Bad request")
        expect(exported.context).toStrictEqual([])
    })

    test("Checking export result with context", () => {
        const exported = new Exception("E001", 400, "Bad request", [123, "any", { any: "value" }]).export()
        expect(exported).toHaveProperty("name")
        expect(exported).toHaveProperty("code")
        expect(exported).toHaveProperty("status")
        expect(exported).toHaveProperty("message")
        expect(exported).toHaveProperty("trace")
        expect(exported).toHaveProperty("context")

        expect(exported.name).toBe("Exception")
        expect(exported.code).toBe("E001")
        expect(exported.status).toBe(400)
        expect(exported.message).toBe("Bad request")
        expect(exported.context).toStrictEqual([123, "any", { any: "value" }])
    })

    test("Checking json result without context", () => {
        const trace = JSON.stringify(error.trace)
        expect(error.json()).toBe(
            '{"name":"Exception","code":"E001","status":400,"message":"Bad request","trace":' + trace + ',"context":[]}'
        )
    })

    test("Checking json result with context", () => {
        const newError = new Exception("E001", 400, "Bad request", [123, "any", { any: "value" }])
        const trace = JSON.stringify(newError.trace)
        const context = '[123,"any",{"any":"value"}]'
        expect(newError.json()).toBe(
            '{"name":"Exception","code":"E001","status":400,"message":"Bad request","trace":' +
                trace +
                ',"context":' +
                context +
                "}"
        )
    })
    test("Check generateTrace result when stack is undefined", () => {
        const testError = new TestError("E001", 400, "Bad request", [], undefined)
        expect(testError.testGenerateTrace()).toStrictEqual([])
    })
    test("Check generateTrace result", () => {
        const stackExpected = [
            "at Object.<anonymous> (/some/path/exception.test.ts:57:26)",
            "at Object.asyncJestTest (/some/path/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:106:37)",
            "at /some/path/node_modules/jest-jasmine2/build/queueRunner.js:45:12",
            "at new Promise (<anonymous>)",
            "at mapper (/some/path/node_modules/jest-jasmine2/build/queueRunner.js:28:19)",
            "at /some/path/node_modules/jest-jasmine2/build/queueRunner.js:75:41",
            "at processTicksAndRejections (internal/process/task_queues.js:97:5)",
        ]
        const testError = new TestError("E001", 400, "Bad request", [], mockStack)
        expect(testError.testGenerateTrace()).toStrictEqual(stackExpected)
    })
})

class TestError extends Exception {
    constructor(code: string, status: number, message: string, context: Array<any> = [], stack: string | undefined) {
        super(code, status, message, context)
        this.stack = stack
    }

    public testGenerateTrace = () => this.generateTrace()
}

const mockStack =
    "Exception: Bad request  \n at Object.<anonymous> (/some/path/exception.test.ts:57:26)  \n at Object.asyncJestTest (/some/path/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:106:37)  \n at /some/path/node_modules/jest-jasmine2/build/queueRunner.js:45:12  \n at new Promise (<anonymous>)  \n at mapper (/some/path/node_modules/jest-jasmine2/build/queueRunner.js:28:19)  \n at /some/path/node_modules/jest-jasmine2/build/queueRunner.js:75:41  \n at processTicksAndRejections (internal/process/task_queues.js:97:5)"
