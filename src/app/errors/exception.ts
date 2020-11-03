import { Errors } from "../../types"

/**
 * Base Class for Http errors
 */
export default class Exception extends Error implements Errors.BuilderBoxError {
    /**
     * {@inheritdoc}
     */
    public readonly code: string

    /**
     * {@inheritdoc}
     */
    public readonly status: number

    /**
     * {@inheritdoc}
     */
    public readonly trace: Array<string>

    /**
     * {@inheritdoc}
     */
    public readonly context: Array<any>

    /**
     *
     * @param code {string}
     * @param status {number}
     * @param message {string}
     * @param context {Array}
     */
    constructor(code: string, status: number, message: string, context: Array<any> = []) {
        super(message)
        Object.defineProperty(this, "name", {
            value: this.constructor.name,
        })
        // Error.captureStackTrace(this, this.constructor)
        this.code = code
        this.status = status
        this.context = context
        this.trace = this.generateTrace()
    }

    /**
     * Override default __toString method
     */
    public toString = (): string => `[${this.code}]: ${this.message}`

    /**
     * {@inheritdoc}
     */
    public isA = (name: string): boolean => this.name === name

    /**
     * {@inheritdoc}
     */
    public export = (): Errors.BuilderBoxErrorExportObject => ({
        name: this.name,
        code: this.code,
        status: this.status,
        message: this.message,
        trace: this.trace,
        context: this.context,
    })

    /**
     * {@inheritdoc}
     */
    public json = (): string => JSON.stringify(this.export())

    /**
     * Generate a trace from the stack error.
     */
    protected generateTrace = (): Array<string> =>
        (this.stack || "")
            .split("\n")
            .map((val) => val.trim())
            .filter((val) => /^at/.test(val))
}
