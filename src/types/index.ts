import Express from "express"

export namespace App {
    export interface CreateAppConfig {
        middleware?: boolean
    }
    export interface CreateApp {
        (options?: CreateAppConfig): Express.Application
    }
}
