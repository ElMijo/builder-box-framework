import "../../../../src/tools/globals"
const globals = ["thrower"]
describe("Testing global register ", () => {
    test("Checking global register", () => {
        const keys = Object.keys(global)
        globals.forEach((key) => {
            expect(global.hasOwnProperty(key)).toBeTruthy()
        })
    })
})
