import {createSlice} from '@reduxjs/toolkit'
import {Tasks} from "../../lib/Tasks";

interface TaskState {
    value: String[] | never
    completed: String[] | never
    filter: String[] | never
}

const initialState: TaskState = {
    value: [],
    completed: [],
    filter: []
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        saveData: (state) => {
            // TODO: Salva o estado da store no localstorage
            localStorage.setItem("tasks", JSON.stringify(state.value))
        },
        populateTasks: (state: any) => {
            // TODO: Roda no início de cada seção para ajustar o Redux com o localStorage.
            const tasks: Array<any> = [];
            JSON.parse(localStorage.getItem("tasks") || "").map((item: any, id: number) => {
                item.id = id
                tasks.push(item);
            });
            tasks.map((obj: Tasks, index: number) => {
                if (obj.completed) {
                    state.completed = [...state.filter, obj] as any
                } else {
                    state.filter = [...state.filter, obj] as any
                }
            })
        },
        completeTask: (state: any, {payload}) => {
            state.value.map((item: any, index: number) => {
                if (item.id === payload.id) {
                    state.value[index]["completed"] = true
                }
            })
            state.filter.map((item: any, index: number) => {
                if (item.id === payload.id) {
                    state.filter.splice(index, 1)
                }
            })
            state.completed.push(payload);
        },
        addTask: (state, {payload}) => {
            state.value = [...state.value, payload] as any
            state.filter = [...state.filter, payload] as any
        },
        removeTask: (state: any, {payload}) => {
            state.value.map((item: any, index: number) => {
                if (item.id === payload.id) {
                    state.value.splice(index, 1)
                }
            })
        }
    },
})

export const {addTask, populateTasks, saveData, completeTask} = taskSlice.actions
export default taskSlice.reducer