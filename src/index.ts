import "dotenv/config"
import http from "http"
import { CreateApp } from "./bootstrap"

const app = CreateApp()
const server = http.createServer(app)

server.listen(3000)

export default { close: (): http.Server => server.close() }
