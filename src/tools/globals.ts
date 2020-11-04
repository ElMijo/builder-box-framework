import { thrower } from "./thrower"

const globals = {
    thrower,
}

export default (() => Object.assign(global, globals))()
