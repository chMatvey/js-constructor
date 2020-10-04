import { ModelTypes } from "./model.types";
import { TitleBlock } from "./block/title-block";
import { TextBlock } from "./block/text-block";
import { ColumnsBlock } from "./block/columns-block";
import { ImageBlock } from "./block/image-block";

export const defaultModelFactory = {
    [ModelTypes.TITLE]: {
        create: (value, options) => new TitleBlock(value, options)
    },

    [ModelTypes.TEXT]: {
        create: (value, options) => new TextBlock(value, options)
    },

    [ModelTypes.COLUMNS]: {
        create: (value, options) => new ColumnsBlock(value, options)
    },

    [ModelTypes.IMAGE]: {
        create: (value, options) => new ImageBlock(value, options)
    },
}

export class modelFactory {
}
