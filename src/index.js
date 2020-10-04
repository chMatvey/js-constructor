import { model } from "./model";
import { modelFactory } from "./model.factory";
import './styles/index.css'

let $content = document.querySelector('#content');

model.forEach(block => {
    const concreteFactory = modelFactory[block.type]

    if (concreteFactory) {
        const html = concreteFactory.toHtml(block)

        console.log(html)

        $content.insertAdjacentHTML('beforeend', html)
    }
})
