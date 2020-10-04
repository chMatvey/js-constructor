import { Block } from "./block";
import { col, parseCssObjectToString, row } from "../utils";

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {tag = 'h1', styles = ''} = this.options;
        return row(col(`<${tag}>${this.value}<${tag}/>`), parseCssObjectToString(styles))
    }
}
