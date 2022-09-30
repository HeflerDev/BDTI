import IValidate, {Input} from "./IValidate";

/*
TODO: Serviço de validação dos campos dos formulários.
 */

export default class Validate implements IValidate {
    public input: Input;

    constructor(input: Input) {
        this.input = input
        this.tasksForm()
    }

    private _errors: Array<string | never> = [];

    get errors(): String[] | never {
        return this._errors;
    }

    private _valid = false;

    get valid(): boolean {
        return this._valid;
    }

    public tasksForm = (): void => {
        if (this.input.title === "") this._errors.push("Title is empty");
        if (this.input.title.length <= 3) this._errors.push("Title must be bigger than 3 words.");
        if (this.input.title.length >= 50) this._errors.push("Title must be shorter than 50 words.");

        if (this.errors) this._valid = true
    };
}