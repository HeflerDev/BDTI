import IValidate, {Input} from "./IValidate";

export default class Validate implements IValidate {
    public input: Input;
    private _errors: Array<string | never> = [];
    private _valid = false;

    constructor(input: Input) {
        this.input = input
        this.tasksForm()
    }

    public tasksForm = (): void => {
        if (this.input.title === "") this._errors.push("Title is empty");
        if (this.input.title.length <= 3) this._errors.push("Title must be bigger than 3 words.");
        if (this.input.title.length >= 50) this._errors.push("Title must be shorter than 50 words.");

        if (this.errors) this._valid = true
    };

    get errors(): String[] | never {
        return this._errors;
    }

    get valid(): boolean {
        return this._valid;
    }
}