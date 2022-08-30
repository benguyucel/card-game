import { objects } from "../data/data"

export const gameModeControl = (mode = 0) => {
    const array = Object.keys(objects)
    return { getMode: array[mode] }
}
export const getModeLength = () => {
    return Object.keys(objects).length
}