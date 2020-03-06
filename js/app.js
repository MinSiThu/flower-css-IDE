import Button from "./libs/Button.js";
import Select from "./libs/Select.js";
import ContentArea from "./libs/ContentArea.js"
import Form from "./libs/Form.js";
import ControlInput from "./libs/ControlInput.js";
import {JSONtoCSS,cssBeautifer} from "./utils.js";
import CodeFace from "./libs/CodeFace.js";

let MainCSSText = ``;

function main(){
    let startProjectButton = Button.buildFromId("start-project-btn");
    let generateCodeButton = Button.buildFromId("generate-code-btn");
    let elementSelector = Select.buildFromId("element-select");
    let contentArea = ContentArea.buildFromId("content-area");
    let controlForm = Form.buildFromId("control-form")
    let controlInputs = ControlInput.buildFromClass("control-input");
    let cssCodeFace = CodeFace.buildFromId("cssCodeFace");

    //event handling
    startProjectButton.listenClick(function(e){
        let element = elementSelector.getSelectedValue();
        contentArea.putElementToEdit(element);
    })

    generateCodeButton.listenClick(function(e){
        cssCodeFace.setInnerText(cssBeautifer(MainCSSText));
    })

    // already prevent default action
    controlForm.listenSubmit(()=>{
        let styleJSON = controlInputs.getAllValuesInJSON();
        let cssText = JSONtoCSS(styleJSON)
        contentArea.setCSS(cssText);

        // set All default styles
        MainCSSText = JSONtoCSS({...styleJSON});
    })

    controlInputs.listenChanges((e)=>{
        controlForm.submit();
    })
}

function accessory(){
    new ClipboardJS('.btn', {
        text: function(trigger) {
            return MainCSSText;
        }
    });
}

main();
accessory();