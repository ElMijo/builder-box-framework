/* eslint max-classes-per-file: ["error", 12] */

import Exception from "./exception"

/**
 * Http error for 400 - Bad Request
 */
export class BadRequestError extends Exception {
    constructor(code: string, message = "Bad Request", context: Array<any> = []) {
        super(code, 400, message, context)
    }
}
/**
 * Http error for 401 - Unauthorized
 */
export class UnauthorizedError extends Exception {
    constructor(code: string, message = "Unauthorized", context: Array<any> = []) {
        super(code, 401, message, context)
    }
}
/**
 * Http error for 402 - Payment Required
 */
export class PaymentRequiredError extends Exception {
    constructor(code: string, message = "Payment Required", context: Array<any> = []) {
        super(code, 402, message, context)
    }
}
/**
 * Http error for 403 - Forbidden
 */
export class ForbiddenError extends Exception {
    constructor(code: string, message = "Forbidden", context: Array<any> = []) {
        super(code, 403, message, context)
    }
}
/**
 * Http error for 404 - Not Found
 */
export class NotFoundError extends Exception {
    constructor(code: string, message = "Not Found", context: Array<any> = []) {
        super(code, 404, message, context)
    }
}
/**
 * Http error for 405 - Method Not Allowed
 */
export class MethodNotAllowedError extends Exception {
    constructor(code: string, message = "Method Not Allowed", context: Array<any> = []) {
        super(code, 405, message, context)
    }
}

/**
 * Error for HTTP 409 - Conflict
 */
export class ConflictError extends Exception {
    constructor(code: string, message = "Conflict", context: Array<any> = []) {
        super(code, 409, message, context)
    }
}
/**
 * Error for HTTP 415 - Unsupported Media Type
 */
export class UnsupportedMediaTypeError extends Exception {
    constructor(code: string, message = "Unsupported Media Type", context: Array<any> = []) {
        super(code, 415, message, context)
    }
}
/**
 * Error for HTTP 422 - Unprocessable Entity
 */
export class UnprocessableEntityError extends Exception {
    constructor(code: string, message = "Unprocessable Entity", context: Array<any> = []) {
        super(code, 422, message, context)
    }
}
/**
 * Error for HTTP 429 - Too Many Requests
 */
export class TooManyRequestsError extends Exception {
    constructor(code: string, message = "Too Many Requests", context: Array<any> = []) {
        super(code, 429, message, context)
    }
}
/**
 * Error for HTTP 500 - Internal Server Error
 */
export class InternalServerError extends Exception {
    constructor(code: string, message = "Internal Server Error", context: Array<any> = []) {
        super(code, 500, message, context)
    }
}
/**
 * Error for HTTP 503 - Service Unavailable
 */
export class ServiceUnavailableError extends Exception {
    constructor(code: string, message = "Service Unavailable", context: Array<any> = []) {
        super(code, 503, message, context)
    }
}
