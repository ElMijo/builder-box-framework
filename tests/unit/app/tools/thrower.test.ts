import { thrower } from "../../../../src/tools"

describe("Testing thrower error function", () => {
    test("Throw default exception error", () => {
        try {
            thrower("E001", "Testing exception")
        } catch (err) {
            expect(err.isA("InternalServerError")).toBeTruthy()
            expect(err.code).toBe("E001")
            expect(err.status).toBe(500)
            expect(err.message).toBe("Testing exception")
            expect(err.context).toStrictEqual([])
        }
    })
    test("Throw default exception error with different status", () => {
        try {
            thrower("E001", "Testing exception", 504)
        } catch (err) {
            expect(err.isA("Exception")).toBeTruthy()
            expect(err.code).toBe("E001")
            expect(err.status).toBe(504)
            expect(err.message).toBe("Testing exception")
            expect(err.context).toStrictEqual([])
        }
    })
    test("Throw default exception error with different status and context", () => {
        try {
            thrower("E001", "Testing exception", 504, [123, "456"])
        } catch (err) {
            expect(err.isA("Exception")).toBeTruthy()
            expect(err.code).toBe("E001")
            expect(err.status).toBe(504)
            expect(err.message).toBe("Testing exception")
            expect(err.context).toStrictEqual([123, "456"])
        }
    })
    test("Throw BadRequestError", () => {
        try {
            thrower("E001", "Testing exception", 400)
        } catch (err) {
            expect(err.isA("BadRequestError")).toBeTruthy()
            expect(err.code).toBe("E001")
            expect(err.status).toBe(400)
            expect(err.message).toBe("Testing exception")
            expect(err.context).toStrictEqual([])
        }
    })
    test("Throw UnauthorizedError", () => {
        try {
            thrower("E001", "Testing exception", 401)
        } catch (err) {
            expect(err.isA("UnauthorizedError")).toBeTruthy()
            expect(err.code).toBe("E001")
            expect(err.status).toBe(401)
            expect(err.message).toBe("Testing exception")
            expect(err.context).toStrictEqual([])
        }
    })
    test("Throw PaymentRequiredError", () => {
        try {
            thrower("E001", "Testing exception", 402)
        } catch (err) {
            expect(err.isA("PaymentRequiredError")).toBeTruthy()
            expect(err.code).toBe("E001")
            expect(err.status).toBe(402)
            expect(err.message).toBe("Testing exception")
            expect(err.context).toStrictEqual([])
        }
    })
    test("Throw ForbiddenError", () => {
        try {
            thrower("E001", "Testing exception", 403)
        } catch (err) {
            expect(err.isA("ForbiddenError")).toBeTruthy()
            expect(err.code).toBe("E001")
            expect(err.status).toBe(403)
            expect(err.message).toBe("Testing exception")
            expect(err.context).toStrictEqual([])
        }
    })
    test("Throw NotFoundError", () => {
        try {
            thrower("E001", "Testing exception", 404)
        } catch (err) {
            expect(err.isA("NotFoundError")).toBeTruthy()
            expect(err.code).toBe("E001")
            expect(err.status).toBe(404)
            expect(err.message).toBe("Testing exception")
            expect(err.context).toStrictEqual([])
        }
    })
    test("Throw MethodNotAllowedError", () => {
        try {
            thrower("E001", "Testing exception", 405)
        } catch (err) {
            expect(err.isA("MethodNotAllowedError")).toBeTruthy()
            expect(err.code).toBe("E001")
            expect(err.status).toBe(405)
            expect(err.message).toBe("Testing exception")
            expect(err.context).toStrictEqual([])
        }
    })
    test("Throw ConflictError", () => {
        try {
            thrower("E001", "Testing exception", 409)
        } catch (err) {
            expect(err.isA("ConflictError")).toBeTruthy()
            expect(err.code).toBe("E001")
            expect(err.status).toBe(409)
            expect(err.message).toBe("Testing exception")
            expect(err.context).toStrictEqual([])
        }
    })
    test("Throw UnsupportedMediaTypeError", () => {
        try {
            thrower("E001", "Testing exception", 415)
        } catch (err) {
            expect(err.isA("UnsupportedMediaTypeError")).toBeTruthy()
            expect(err.code).toBe("E001")
            expect(err.status).toBe(415)
            expect(err.message).toBe("Testing exception")
            expect(err.context).toStrictEqual([])
        }
    })
    test("Throw UnprocessableEntityError", () => {
        try {
            thrower("E001", "Testing exception", 422)
        } catch (err) {
            expect(err.isA("UnprocessableEntityError")).toBeTruthy()
            expect(err.code).toBe("E001")
            expect(err.status).toBe(422)
            expect(err.message).toBe("Testing exception")
            expect(err.context).toStrictEqual([])
        }
    })
    test("Throw TooManyRequestsError", () => {
        try {
            thrower("E001", "Testing exception", 429)
        } catch (err) {
            expect(err.isA("TooManyRequestsError")).toBeTruthy()
            expect(err.code).toBe("E001")
            expect(err.status).toBe(429)
            expect(err.message).toBe("Testing exception")
            expect(err.context).toStrictEqual([])
        }
    })
    test("Throw InternalServerError", () => {
        try {
            thrower("E001", "Testing exception", 500)
        } catch (err) {
            expect(err.isA("InternalServerError")).toBeTruthy()
            expect(err.code).toBe("E001")
            expect(err.status).toBe(500)
            expect(err.message).toBe("Testing exception")
            expect(err.context).toStrictEqual([])
        }
    })
    test("Throw ServiceUnavailableError", () => {
        try {
            thrower("E001", "Testing exception", 503)
        } catch (err) {
            expect(err.isA("ServiceUnavailableError")).toBeTruthy()
            expect(err.code).toBe("E001")
            expect(err.status).toBe(503)
            expect(err.message).toBe("Testing exception")
            expect(err.context).toStrictEqual([])
        }
    })
})
