
export const suffle = (array) => {
    const list = array.sort(() => Math.random() - 0.5)
    return list
}
