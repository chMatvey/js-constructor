import { Block } from "./block";
import { col, parseCssObjectToString, row } from "../utils";

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml = () => row(
        this.value
            .map(col)
            .join(''),
        parseCssObjectToString(this.options?.styles)
    )
}
