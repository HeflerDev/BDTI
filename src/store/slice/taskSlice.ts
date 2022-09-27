import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        value: [],
    },
    reducers: {
        addTask: (state, {payload}) => {
            state.value = [...state.value, payload]
        },
    },
})

export const { addTask } = taskSlice.actions
export default taskSlice.reducer