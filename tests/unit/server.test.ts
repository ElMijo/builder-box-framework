const configMock = jest.fn()
const serverCloseMock = jest.fn()
const listenMock = jest.fn()
const createAppMock = jest.fn().mockImplementation(() => "app")

const createServerMock = jest.fn().mockImplementation(() => ({
    close: serverCloseMock,
    listen: listenMock,
}))
jest.doMock("dotenv/config", () => configMock())
jest.doMock("http", () => ({
    createServer: createServerMock,
}))
jest.doMock("../../src/bootstrap", () => ({ CreateApp: createAppMock }))

import server from "../../src"

describe("Testing Create server...", () => {
    test("Checking that the server run successful", () => {
        expect(configMock).toHaveBeenCalledTimes(1)
        expect(createAppMock).toHaveBeenCalledTimes(1)
        expect(createServerMock).toHaveBeenNthCalledWith(1, "app")
        expect(listenMock).toHaveBeenCalledTimes(1)
        server.close()
        expect(serverCloseMock).toHaveBeenCalledTimes(1)
    })
})
