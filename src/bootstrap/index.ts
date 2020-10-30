import Express from "express"
import { App } from "../types"

const defaultConfig: App.CreateAppConfig = {
    middleware: true,
}

export const CreateApp: App.CreateApp = (options: App.CreateAppConfig = {}): Express.Application => {
    const config = { ...defaultConfig, ...options }
    const app = Express()

    if (config.middleware) {
        // import middleware
    }

    return app
}
