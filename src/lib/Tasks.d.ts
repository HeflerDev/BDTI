/*
TODO: Aqui em lib são shchemas e tipagens de dados
 */

export type Tasks = {
    id: number
    title: string,
    description?: string,
    completed: boolean,
    archived: boolean,
    important: boolean,
    repeat: "unique" | "weekday" | "weekend" | "always",
    tags: String[]
} | never