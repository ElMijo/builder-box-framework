import * as errors from "../app/errors"
import { Tools } from "../types"

interface ErrorMap {
    [key: number]: any
}

/**
 * This is the mapping reference for the error status code and error object.
 */
const errorMap: ErrorMap = {
    400: errors.BadRequestError,
    401: errors.UnauthorizedError,
    402: errors.PaymentRequiredError,
    403: errors.ForbiddenError,
    404: errors.NotFoundError,
    405: errors.MethodNotAllowedError,
    409: errors.ConflictError,
    415: errors.UnsupportedMediaTypeError,
    422: errors.UnprocessableEntityError,
    429: errors.TooManyRequestsError,
    500: errors.InternalServerError,
    503: errors.ServiceUnavailableError,
}

/**
 * Throw an exception by status
 */
export const thrower: Tools.Thrower = (code: string, message: string, status = 500, context: Array<any> = []): void => {
    if (!Object.keys(errorMap).includes(status.toString())) {
        throw new errors.Exception(code, status, message, context)
    }

    throw new errorMap[status](code, message, context)
}
