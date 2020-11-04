const globalsMock = jest.fn()
jest.doMock("../../src/tools/globals", globalsMock)
const expressMock = jest.fn().mockImplementation(() => {
    const app = () => {}
    return app
})
jest.doMock("express", () => ({
    __esModule: true,
    default: expressMock,
}))

import { CreateApp } from "../../src/bootstrap"

afterEach(() => jest.clearAllMocks())
describe("Testing bootstrap application...", () => {
    test("CreateApp: Checking that the object is instantiable", () => {
        expect(CreateApp).not.toBeUndefined()
        expect(CreateApp).toBeInstanceOf(Function)
        expect(globalsMock).toHaveBeenCalledTimes(1)
    })
    test("CreateApp: Call with default parameters", () => {
        const app = CreateApp()
        expect(expressMock).toHaveBeenCalledTimes(1)
        expect(app).not.toBeUndefined()
    })
    test("CreateApp: Call with middleware:false parameters", () => {
        const app = CreateApp({ middleware: false })
        expect(expressMock).toHaveBeenCalledTimes(1)
        expect(app).not.toBeUndefined()
    })
})
