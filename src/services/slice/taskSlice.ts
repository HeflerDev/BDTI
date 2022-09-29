import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        value: [],
    },
    reducers: {
        saveData: (state) => {
            console.log("KKKKK")
            localStorage.setItem("tasks", JSON.stringify(state.value))
        },
        populateTasks: (state, {payload}) => {
            state.value = payload;
        },
        addTask: (state, {payload}) => {
            state.value = [...state.value, payload] as any
        },
    },
})

export const { addTask, populateTasks, saveData} = taskSlice.actions
export default taskSlice.reducer