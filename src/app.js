import { Content } from "./content";
import { Sidebar } from "./sidebar";

export class App {
    constructor(model) {
        this.model = model
    }


    run() {
        const content = new Content('#content')

        content.render(this.model)

        new Sidebar('#panel', newBlock => {
            this.model.push(newBlock)
            content.render(this.model)
        })

    }
}
