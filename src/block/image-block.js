import { Block } from "./block";
import { parseCssObjectToString, row } from "../utils";

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {styles = '', imageStyles = '', alt = ''} = this.options
        return row(
            `<img src="${this.value}" alt="${alt}" style="${parseCssObjectToString(imageStyles)}"/>`,
            parseCssObjectToString(styles)
        )
    }
}
