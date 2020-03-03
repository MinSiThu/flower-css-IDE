class Button {
    constructor(id){
        this.id = id;
        this.node = document.getElementById(id);
    }

    listenClick(handler){
        this.node.addEventListener("click",handler);
    }

    static buildFromId(id){
        return new Button(id);
    }
}

export default Button;