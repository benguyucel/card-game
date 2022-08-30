import { createSlice } from "@reduxjs/toolkit"
import { newFlag, reCreate } from "../../data/data"
import { suffle } from "../../utilites/newItemList"
const initialState = {
    items: reCreate(),
    score: 200,
    gameMode: "newFlag"
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
            const currentCard = typeof action.payload === "undefined" ? 15 : action.payload;
            const suffled = reCreate(state.gameMode, currentCard);
            suffled.forEach(item => {
                item.status = false
            });
            state.items = suffled
            state.score = initialState.score
        },
        changeLevel: (state, action) => {
            let add = (state.items.length / 2) + (action.payload)
            if (add < 5) add = 5
            const game = reCreate(state.gameMode, add)
            state.items = game
            state.score = initialState.score
        }, changeMode: (state, action) => {
            const { gameMode, currentCard } = action.payload
            state.gameMode = gameMode
            state.items = reCreate(state.gameMode, currentCard)
            state.score = initialState.score

        }

    }
})
export const getCorrectCartCount = state => state.card.items.filter(item => item.status === true).length / 2
export const getGameMode = state => state.card.gameMode
export const { toggleActive, addScore, newGame, changeLevel, changeMode } = cardSlice.actions
export default cardSlice.reducer