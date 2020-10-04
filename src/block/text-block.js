import { Block } from "./block";
import { col, parseCssObjectToString, row } from "../utils";

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml = () => row(col(`<p>${this.value}</p>`), parseCssObjectToString(this?.options?.styles))
}
