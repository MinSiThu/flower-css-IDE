import Button from "./libs/Button.js";
import Select from "./libs/Select.js";
import ContentArea from "./libs/ContentArea.js"
import Form from "./libs/Form.js";
import ControlInput from "./libs/ControlInput.js";

function main(){
    let startProjectButton = Button.buildFromId("start-project-btn");
    let elementSelector = Select.buildFromId("element-select");
    let contentArea = ContentArea.buildFromId("content-area");
    let controlForm = Form.buildFromId("control-form")
    let controlInputs = ControlInput.buildFromClass("control-input");

    //event handling
    startProjectButton.listenClick(function(e){
        let element = elementSelector.getSelectedValue();
        contentArea.putElementToEdit(element);
    })

    // already prevent default action
    controlForm.listenSubmit(()=>{
        console.log(controlInputs.getAllValuesInJSON());
        
    })

    controlInputs.listenChanges((e)=>{
        controlForm.submit();
    })
}

main();