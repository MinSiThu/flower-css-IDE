class ControlInput{
    constructor(className){
        this.selector = className;
        this.nodes = document.getElementsByClassName(className);
    }

    listenChanges(callback){
        for (let index = 0; index < this.nodes.length; index++) {
            const input = this.nodes[index];
            input.addEventListener("change",callback);
        }
    }

    getAllValuesInJSON(){
        let valueJSON = {};
        for (let index = 0; index < this.nodes.length; index++) {
            const input = this.nodes[index];
            valueJSON[input.name] = input.value;
        }
        return valueJSON;
    }

    static buildFromClass(className){
        return new ControlInput(className);
    }
}

export default ControlInput;