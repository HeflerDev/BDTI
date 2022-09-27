declare module namespac {
    export interface Task {
        title: string,
        description?: string,
        completed: boolean,
        archived: boolean,
        important: boolean,
        repeat: "unique" | "weekday" | "weekend" | "always"
    }
}