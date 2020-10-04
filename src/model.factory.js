import { ModelTypes } from "./model.types";
import { col, parseCssObjectToString, row } from "./utils";

export const modelFactory = {
    [ModelTypes.TITLE]: {
        toHtml: block => {
            const {tag = 'h1', styles = ''} = block.options;
            return row(col(`<${tag}>${block.value}<${tag}/>`), parseCssObjectToString(styles))
        }
    },
    [ModelTypes.TEXT]: {
        toHtml: block => row(col(`<p>${block.value}</p>`), parseCssObjectToString(block?.options?.styles))
    },
    [ModelTypes.COLUMNS]: {
        toHtml: block => row(
            block.value
                .map(col)
                .join(''),
            parseCssObjectToString(block.options?.styles)
        )
    },
    [ModelTypes.IMAGE]: {
        toHtml: block => {
            const {styles = '', imageStyles = '', alt = ''} = block.options
            return row(
                `<img src="${block.value}" alt="${alt}" style="${parseCssObjectToString(imageStyles)}"/>`,
                parseCssObjectToString(styles)
            )
        }
    }
}
