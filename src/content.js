import { model } from "./model";

export class Content {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }

    render(model) {
        this.$element.innerHTML = ''

        model.forEach(block => {
            this.$element.insertAdjacentHTML('beforeend', block.toHtml())
        })
    }
}
