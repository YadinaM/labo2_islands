export default class Island{
    constructor(){
        console.log("hey");
        this.hookEvents();
    }

    hookEvents(){
        document.querySelector("#add-item-text").addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                this.addItem(e.target.value);
            }
        })
    }

    addItem(text){
        //console.log(`Add item: ${text}`);
        let todo = new Todo(text);
        todo.render();
    }
}