import {
    BadRequestError,
    UnauthorizedError,
    PaymentRequiredError,
    ForbiddenError,
    NotFoundError,
    MethodNotAllowedError,
    ConflictError,
    UnsupportedMediaTypeError,
    UnprocessableEntityError,
    TooManyRequestsError,
    InternalServerError,
    ServiceUnavailableError,
} from "../../../../src/app/errors"

describe("Testing Http error classes", () => {
    test("BadRequestError: Checking that the object is instantiable", () => {
        const error = new BadRequestError("E001")
        expect(error).toBeInstanceOf(Error)
        expect(error).toBeInstanceOf(BadRequestError)
        expect(error.isA("BadRequestError")).toBeTruthy()
    })
    test("BadRequestError: Checking export result without context", () => {
        const error = new BadRequestError("E001")
        const exported = error.export()
        expect(exported.name).toBe("BadRequestError")
        expect(exported.status).toBe(400)
        expect(exported.message).toBe("Bad Request")
        expect(exported.context).toStrictEqual({})
    })
    test("BadRequestError: Checking export result with context", () => {
        const exported = new BadRequestError("E001", "Bad request", { any: "value", list: [1, 2, 3] }).export()
        expect(exported.context).toStrictEqual({ any: "value", list: [1, 2, 3] })
    })

    test("UnauthorizedError: Checking that the object is instantiable", () => {
        const error = new UnauthorizedError("E001")
        expect(error).toBeInstanceOf(Error)
        expect(error).toBeInstanceOf(UnauthorizedError)
        expect(error.isA("UnauthorizedError")).toBeTruthy()
    })
    test("UnauthorizedError: Checking export result without context", () => {
        const error = new UnauthorizedError("E001")
        const exported = error.export()
        expect(exported.name).toBe("UnauthorizedError")
        expect(exported.status).toBe(401)
        expect(exported.message).toBe("Unauthorized")
        expect(exported.context).toStrictEqual({})
    })
    test("UnauthorizedError: Checking export result with context", () => {
        const exported = new UnauthorizedError("E001", "Unauthorized", { any: "value", list: [1, 2, 3] }).export()
        expect(exported.context).toStrictEqual({ any: "value", list: [1, 2, 3] })
    })

    test("PaymentRequiredError: Checking that the object is instantiable", () => {
        const error = new PaymentRequiredError("E001")
        expect(error).toBeInstanceOf(Error)
        expect(error).toBeInstanceOf(PaymentRequiredError)
        expect(error.isA("PaymentRequiredError")).toBeTruthy()
    })
    test("PaymentRequiredError: Checking export result without context", () => {
        const error = new PaymentRequiredError("E001")
        const exported = error.export()
        expect(exported.name).toBe("PaymentRequiredError")
        expect(exported.status).toBe(402)
        expect(exported.message).toBe("Payment Required")
        expect(exported.context).toStrictEqual({})
    })
    test("PaymentRequiredError: Checking export result with context", () => {
        const exported = new PaymentRequiredError("E001", "Payment Required", {
            any: "value",
            list: [1, 2, 3],
        }).export()
        expect(exported.context).toStrictEqual({ any: "value", list: [1, 2, 3] })
    })

    test("ForbiddenError: Checking that the object is instantiable", () => {
        const error = new ForbiddenError("E001")
        expect(error).toBeInstanceOf(Error)
        expect(error).toBeInstanceOf(ForbiddenError)
        expect(error.isA("ForbiddenError")).toBeTruthy()
    })
    test("ForbiddenError: Checking export result without context", () => {
        const error = new ForbiddenError("E001")
        const exported = error.export()
        expect(exported.name).toBe("ForbiddenError")
        expect(exported.status).toBe(403)
        expect(exported.message).toBe("Forbidden")
        expect(exported.context).toStrictEqual({})
    })
    test("ForbiddenError: Checking export result with context", () => {
        const exported = new ForbiddenError("E001", "Forbidden", { any: "value", list: [1, 2, 3] }).export()
        expect(exported.context).toStrictEqual({ any: "value", list: [1, 2, 3] })
    })

    test("NotFoundError: Checking that the object is instantiable", () => {
        const error = new NotFoundError("E001")
        expect(error).toBeInstanceOf(Error)
        expect(error).toBeInstanceOf(NotFoundError)
        expect(error.isA("NotFoundError")).toBeTruthy()
    })
    test("NotFoundError: Checking export result without context", () => {
        const error = new NotFoundError("E001")
        const exported = error.export()
        expect(exported.name).toBe("NotFoundError")
        expect(exported.status).toBe(404)
        expect(exported.message).toBe("Not Found")
        expect(exported.context).toStrictEqual({})
    })
    test("NotFoundError: Checking export result with context", () => {
        const exported = new NotFoundError("E001", "Not Found", { any: "value", list: [1, 2, 3] }).export()
        expect(exported.context).toStrictEqual({ any: "value", list: [1, 2, 3] })
    })

    test("MethodNotAllowedError: Checking that the object is instantiable", () => {
        const error = new MethodNotAllowedError("E001")
        expect(error).toBeInstanceOf(Error)
        expect(error).toBeInstanceOf(MethodNotAllowedError)
        expect(error.isA("MethodNotAllowedError")).toBeTruthy()
    })
    test("MethodNotAllowedError: Checking export result without context", () => {
        const error = new MethodNotAllowedError("E001")
        const exported = error.export()
        expect(exported.name).toBe("MethodNotAllowedError")
        expect(exported.status).toBe(405)
        expect(exported.message).toBe("Method Not Allowed")
        expect(exported.context).toStrictEqual({})
    })
    test("MethodNotAllowedError: Checking export result with context", () => {
        const exported = new MethodNotAllowedError("E001", "Method Not Allowed", {
            any: "value",
            list: [1, 2, 3],
        }).export()
        expect(exported.context).toStrictEqual({ any: "value", list: [1, 2, 3] })
    })

    test("ConflictError: Checking that the object is instantiable", () => {
        const error = new ConflictError("E001")
        expect(error).toBeInstanceOf(Error)
        expect(error).toBeInstanceOf(ConflictError)
        expect(error.isA("ConflictError")).toBeTruthy()
    })
    test("ConflictError: Checking export result without context", () => {
        const error = new ConflictError("E001")
        const exported = error.export()
        expect(exported.name).toBe("ConflictError")
        expect(exported.status).toBe(409)
        expect(exported.message).toBe("Conflict")
        expect(exported.context).toStrictEqual({})
    })
    test("ConflictError: Checking export result with context", () => {
        const exported = new ConflictError("E001", "Conflict", { any: "value", list: [1, 2, 3] }).export()
        expect(exported.context).toStrictEqual({ any: "value", list: [1, 2, 3] })
    })

    test("UnsupportedMediaTypeError: Checking that the object is instantiable", () => {
        const error = new UnsupportedMediaTypeError("E001")
        expect(error).toBeInstanceOf(Error)
        expect(error).toBeInstanceOf(UnsupportedMediaTypeError)
        expect(error.isA("UnsupportedMediaTypeError")).toBeTruthy()
    })
    test("UnsupportedMediaTypeError: Checking export result without context", () => {
        const error = new UnsupportedMediaTypeError("E001")
        const exported = error.export()
        expect(exported.name).toBe("UnsupportedMediaTypeError")
        expect(exported.status).toBe(415)
        expect(exported.message).toBe("Unsupported Media Type")
        expect(exported.context).toStrictEqual({})
    })
    test("UnsupportedMediaTypeError: Checking export result with context", () => {
        const exported = new UnsupportedMediaTypeError("E001", "Unsupported Media Type", {
            any: "value",
            list: [1, 2, 3],
        }).export()
        expect(exported.context).toStrictEqual({ any: "value", list: [1, 2, 3] })
    })

    test("UnprocessableEntityError: Checking that the object is instantiable", () => {
        const error = new UnprocessableEntityError("E001")
        expect(error).toBeInstanceOf(Error)
        expect(error).toBeInstanceOf(UnprocessableEntityError)
        expect(error.isA("UnprocessableEntityError")).toBeTruthy()
    })
    test("UnprocessableEntityError: Checking export result without context", () => {
        const error = new UnprocessableEntityError("E001")
        const exported = error.export()
        expect(exported.name).toBe("UnprocessableEntityError")
        expect(exported.status).toBe(422)
        expect(exported.message).toBe("Unprocessable Entity")
        expect(exported.context).toStrictEqual({})
    })
    test("UnprocessableEntityError: Checking export result with context", () => {
        const exported = new UnprocessableEntityError("E001", "Unprocessable Entity", {
            any: "value",
            list: [1, 2, 3],
        }).export()
        expect(exported.context).toStrictEqual({ any: "value", list: [1, 2, 3] })
    })

    test("TooManyRequestsError: Checking that the object is instantiable", () => {
        const error = new TooManyRequestsError("E001")
        expect(error).toBeInstanceOf(Error)
        expect(error).toBeInstanceOf(TooManyRequestsError)
        expect(error.isA("TooManyRequestsError")).toBeTruthy()
    })
    test("TooManyRequestsError: Checking export result without context", () => {
        const error = new TooManyRequestsError("E001")
        const exported = error.export()
        expect(exported.name).toBe("TooManyRequestsError")
        expect(exported.status).toBe(429)
        expect(exported.message).toBe("Too Many Requests")
        expect(exported.context).toStrictEqual({})
    })
    test("TooManyRequestsError: Checking export result with context", () => {
        const exported = new TooManyRequestsError("E001", "Too Many Requests", {
            any: "value",
            list: [1, 2, 3],
        }).export()
        expect(exported.context).toStrictEqual({ any: "value", list: [1, 2, 3] })
    })

    test("InternalServerError: Checking that the object is instantiable", () => {
        const error = new InternalServerError("E001")
        expect(error).toBeInstanceOf(Error)
        expect(error).toBeInstanceOf(InternalServerError)
        expect(error.isA("InternalServerError")).toBeTruthy()
    })
    test("InternalServerError: Checking export result without context", () => {
        const error = new InternalServerError("E001")
        const exported = error.export()
        expect(exported.name).toBe("InternalServerError")
        expect(exported.status).toBe(500)
        expect(exported.message).toBe("Internal Server Error")
        expect(exported.context).toStrictEqual({})
    })
    test("InternalServerError: Checking export result with context", () => {
        const exported = new InternalServerError("E001", "Internal Server Error", {
            any: "value",
            list: [1, 2, 3],
        }).export()
        expect(exported.context).toStrictEqual({ any: "value", list: [1, 2, 3] })
    })

    test("ServiceUnavailableError: Checking that the object is instantiable", () => {
        const error = new ServiceUnavailableError("E001")
        expect(error).toBeInstanceOf(Error)
        expect(error).toBeInstanceOf(ServiceUnavailableError)
        expect(error.isA("ServiceUnavailableError")).toBeTruthy()
    })
    test("ServiceUnavailableError: Checking export result without context", () => {
        const error = new ServiceUnavailableError("E001")
        const exported = error.export()
        expect(exported.name).toBe("ServiceUnavailableError")
        expect(exported.status).toBe(503)
        expect(exported.message).toBe("Service Unavailable")
        expect(exported.context).toStrictEqual({})
    })
    test("ServiceUnavailableError: Checking export result with context", () => {
        const exported = new ServiceUnavailableError("E001", "Service Unavailable", {
            any: "value",
            list: [1, 2, 3],
        }).export()
        expect(exported.context).toStrictEqual({ any: "value", list: [1, 2, 3] })
    })
})
