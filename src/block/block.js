export class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    toHtml() {
        throw new Error('Not implemented method')
    }
}
