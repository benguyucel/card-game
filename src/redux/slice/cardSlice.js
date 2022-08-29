import { createSlice } from "@reduxjs/toolkit"
import { newFlag, reCreate } from "../../data/data"
import { suffle } from "../../utilites/newItemList"
const initialState = {
    items: [...suffle(reCreate(newFlag))],
    score: 200
}
export const cardSlice = createSlice({
    name: "cards",
    initialState: initialState
    , reducers: {
        toggleActive: (state, action) => {
            const { id } = action.payload
            const findItem = state.items.find((item) => item.id === id)
            if (findItem) {
                findItem.status = !findItem.status
            }

        },
        addScore: (state, action) => {
            state.score = state.score + (action.payload)
        },
        newGame: (state, action) => {
            const suffled = suffle(reCreate(newFlag));
            suffled.forEach(item => {
                item.status = false
            });
            state.items = suffled
            state.score = 200
        },
        changeLevel: (state, action) => {
            const newFlags = reCreate(newFlag, action.payload)
            state.items = newFlags
        }

    }
})
export const { toggleActive, addScore, newGame, changeLevel } = cardSlice.actions
export default cardSlice.reducer