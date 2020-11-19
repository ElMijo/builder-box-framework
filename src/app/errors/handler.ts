import { Request, Response, NextFunction } from "express"
import { Exception } from "."

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (err: Exception, req: Request, res: Response, next: NextFunction) => {
    if (!err) return next()
    return res.status(err instanceof Exception ? err.status : 500).json({
        errors: {
            code: err.code || null,
            message: err.message,
            validation: err.context?.validation || [],
        },
    })
}
