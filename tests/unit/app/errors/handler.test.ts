import { Exception, errorHandler, UnprocessableEntityError } from "../../../../src/app/errors"
import { Response, NextFunction } from "express"
import { mock } from "jest-mock-extended"

describe("Testing error handler", () => {
    test("Checking that the object is instantiable", () => {
        expect(errorHandler).toBeInstanceOf(Function)
    })

    test("Testing error handler response with a BuilderBox error without context", () => {
        const err = new Exception("E001", 500, "Something is wrong man.")
        const req = jest.fn()
        const res = mock<Response>()
        const next = jest.fn() as NextFunction
        res.status.mockReturnThis()
        //@ts-expect-error
        errorHandler(err, req, res, next)
        expect(req).not.toHaveBeenCalled()
        expect(next).not.toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(500)
        expect(res.json).toHaveBeenCalledWith({
            errors: {
                code: "E001",
                message: "Something is wrong man.",
                validation: [],
            },
        })
    })

    test("Testing error handler response with a BuilderBox error with context", () => {
        const err = new Exception("E001", 500, "Something is wrong man.", { any: "thing" })
        const req = jest.fn()
        const res = mock<Response>()
        const next = jest.fn() as NextFunction
        res.status.mockReturnThis()
        //@ts-expect-error
        errorHandler(err, req, res, next)
        expect(req).not.toHaveBeenCalled()
        expect(next).not.toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(500)
        expect(res.json).toHaveBeenCalledWith({
            errors: {
                code: "E001",
                message: "Something is wrong man.",
                validation: [],
            },
        })
    })

    test("Testing error handler response with a BuilderBox error with context validation", () => {
        const err = new UnprocessableEntityError("E001", "Something is wrong man.", {
            validation: { email: "[any] is not a valid email" },
        })
        const req = jest.fn()
        const res = mock<Response>()
        const next = jest.fn() as NextFunction
        res.status.mockReturnThis()
        //@ts-expect-error
        errorHandler(err, req, res, next)
        expect(req).not.toHaveBeenCalled()
        expect(next).not.toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(422)
        expect(res.json).toHaveBeenCalledWith({
            errors: {
                code: "E001",
                message: "Something is wrong man.",
                validation: {
                    email: "[any] is not a valid email",
                },
            },
        })
    })

    test("Testing error handler response with non BuilderBox error", () => {
        const err = new Error("Something is wrong man.")
        const req = jest.fn()
        const res = mock<Response>()
        const next = jest.fn() as NextFunction
        res.status.mockReturnThis()
        //@ts-expect-error
        errorHandler(err, req, res, next)
        expect(req).not.toHaveBeenCalled()
        expect(next).not.toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledWith(500)
        expect(res.json).toHaveBeenCalledWith({
            errors: {
                code: null,
                message: "Something is wrong man.",
                validation: [],
            },
        })
    })

    test("Testing error handler response with non error", () => {
        const err: any = null
        const req = jest.fn()
        const res = mock<Response>()
        const next = jest.fn() as NextFunction
        //@ts-expect-error
        errorHandler(err, req, res, next)
        expect(req).not.toHaveBeenCalled()
        expect(next).toHaveBeenCalled()
        expect(res.status).not.toHaveBeenCalled()
        expect(res.json).not.toHaveBeenCalled()
    })
})
