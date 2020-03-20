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
        let boxShadow = ``;
        let valueJSON = {};
        for (let index = 0; index < this.nodes.length; index++) {
            const input = this.nodes[index];
            switch(input.getAttribute("data-extra-type")){
                case "pixel":
                    valueJSON[input.name] = input.value+"px";
                break;

                case "percent":
                    valueJSON[input.name] = input.value+"%";
                break;

                
                default:
                valueJSON[input.name] = input.value;
                break;
            }
        }
        return valueJSON;
    }

    static buildFromClass(className){
        return new ControlInput(className);
    }
}

export default ControlInput;