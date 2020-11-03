/* eslint max-classes-per-file: ["error", 20] */

import Exception from "./exception"

export class BadRequestError extends Exception {
    constructor(code: string, message = "Bad Request", context: Array<any> = []) {
        super(code, 400, message, context)
    }
}

export class UnauthorizedError extends Exception {
    constructor(code: string, message = "Unauthorized", context: Array<any> = []) {
        super(code, 401, message, context)
    }
}

export class PaymentRequiredError extends Exception {
    constructor(code: string, message = "Payment Required", context: Array<any> = []) {
        super(code, 402, message, context)
    }
}

export class ForbiddenError extends Exception {
    constructor(code: string, message = "Forbidden", context: Array<any> = []) {
        super(code, 403, message, context)
    }
}

export class NotFoundError extends Exception {
    constructor(code: string, message = "Not Found", context: Array<any> = []) {
        super(code, 404, message, context)
    }
}

export class MethodNotAllowedError extends Exception {
    constructor(code: string, message = "Method Not Allowed", context: Array<any> = []) {
        super(code, 405, message, context)
    }
}

export class ConflictError extends Exception {
    constructor(code: string, message = "Conflict", context: Array<any> = []) {
        super(code, 409, message, context)
    }
}

export class UnsupportedMediaTypeError extends Exception {
    constructor(code: string, message = "Unsupported Media Type", context: Array<any> = []) {
        super(code, 415, message, context)
    }
}

export class UnprocessableEntityError extends Exception {
    constructor(code: string, message = "Unprocessable Entity", context: Array<any> = []) {
        super(code, 422, message, context)
    }
}

export class TooManyRequestsError extends Exception {
    constructor(code: string, message = "Too Many Requests", context: Array<any> = []) {
        super(code, 429, message, context)
    }
}

export class InternalServerError extends Exception {
    constructor(code: string, message = "Internal Server Error", context: Array<any> = []) {
        super(code, 500, message, context)
    }
}

export class ServiceUnavailableError extends Exception {
    constructor(code: string, message = "Service Unavailable", context: Array<any> = []) {
        super(code, 503, message, context)
    }
}
