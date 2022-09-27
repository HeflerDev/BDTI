import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        value: [],
    },
    reducers: {
        populateTasks: (state, {payload}) => {
            state.value = payload;
        },
        addTask: (state, {payload}) => {
            state.value = [...state.value, payload] as any
        },
    },
})

export const { addTask, populateTasks } = taskSlice.actions
export default taskSlice.reducer