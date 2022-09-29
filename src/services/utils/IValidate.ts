export interface Input {
   title: string,
   description?: string,
   completed: boolean,
   archived: boolean,
   important: boolean,
   repeat: string,
   tags: String[]
}

export default interface IValidate {
   tasksForm(): void
   input: Input
   errors: String[] | never
   valid: boolean
}