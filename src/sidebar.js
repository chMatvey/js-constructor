import { block } from "./utils";
import { defaultModelFactory, modelFactory } from "./model.factory";

export class Sidebar {
    constructor(selector, updateCallback, modelFactory = defaultModelFactory) {
        this.$element = document.querySelector(selector)
        this.update = updateCallback
        this.modelFactory = modelFactory

        this.#init()
    }

    get template() {
        return [
            block('text'),
            block('title')
        ].join('')
    }

    #init() {
        this.$element.insertAdjacentHTML('afterbegin', this.template)
        this.$element.addEventListener('submit', this.addBlock.bind(this))
    }

    addBlock(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        const concreteFactory = this.modelFactory[type];
        const newBlock = concreteFactory.create(value, {styles})

        this.update(newBlock)

        this.clear(event.target)
    }

    clear(target) {
        target.value.value = ''
        target.styles.value = ''
    }
}
