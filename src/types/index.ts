import Express from "express"

export namespace App {
    export interface CreateAppConfig {
        middleware?: boolean
    }
    export interface CreateApp {
        (options?: CreateAppConfig): Express.Application
    }
}

export namespace Helpers {
    /**
     * Help to export an Object
     */
    export interface Serializable<T> {
        export(): T
        /**
         * Create an Json string from current Object
         */
        json(): string
    }
}

export namespace Tools {
    export interface Thrower {
        (code: string, message: string, status?: number, context?: Array<any>): void
    }
}

export namespace Errors {
    export interface BuilderBoxErrorProps {
        /**
         * Error code
         * @type {string}
         */
        code: string

        /**
         * Http error status code
         * @type {number}
         */
        status: number

        /**
         * Error trace
         * @type {Array}
         */
        trace: Array<string>

        /**
         * Error context
         * @type {Array}
         */
        context: Array<any>
    }

    export interface BuilderBoxErrorExportObject extends Object, BuilderBoxErrorProps {
        /**
         * Error class name
         * @type{string}
         */
        name: string

        /**
         * Error message
         * @type{string}
         */
        message: string
    }

    /**
     * Interface to implement any BuilderBox error
     */
    export interface BuilderBoxError extends BuilderBoxErrorProps, Helpers.Serializable<BuilderBoxErrorExportObject> {
        /**
         * Validate if object is given error class name.
         *
         * @param name {string}
         */
        isA(name: string): boolean
    }
}
