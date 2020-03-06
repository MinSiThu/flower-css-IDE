import ElementTypes from "./ElementTypes.js";

let sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper morbi tincidunt ornare massa eget egestas purus. Dolor morbi non arcu risus quis varius quam quisque id. Eget magna fermentum iaculis eu non diam phasellus. Vel risus commodo viverra maecenas accumsan lacus. Risus nullam eget felis eget nunc lobortis mattis aliquam. Massa ultricies mi quis hendrerit dolor magna eget est. Quisque egestas diam in arcu cursus. Quis hendrerit dolor magna eget est lorem ipsum. Quam viverra orci sagittis eu volutpat odio. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Consectetur a erat nam at lectus urna. Quisque id diam vel quam elementum pulvinar etiam. Accumsan in nisl nisi scelerisque. Suscipit tellus mauris a diam maecenas sed enim. Sed velit dignissim sodales ut. Cras ornare arcu dui vivamus arcu felis bibendum ut.`

class ContentArea{
    constructor(id){
        this.id = id;
        this.node = document.getElementById(id);
        this.editElement;
    }

    setElementToEdit(elementType){
        let element;
        switch(elementType){
            case ElementTypes.BUTTON:
                element = document.createElement(elementType);
                element.innerText = "Sample Button";
            break;

            case ElementTypes.INPUT:
                element = document.createElement(elementType);
            break;

            case ElementTypes.DIV:
                element = document.createElement(elementType);
                element.innerText = sampleText;
            break;
        }
        this.editElement = element;
        this.editElement.setAttribute("id","css-object")
        return this.editElement;
    }

    getDefaultCSS(){
        let style = {};
        Object.entries(this.editElement.style).forEach(([prop,value])=>{
            if(this.editElement.style[prop] != "" && Number.isInteger(parseInt(prop)) == false){
                style[prop] = value;
            }
        })
        return style;
    }

    setCSS(cssText){
        this.editElement.style.cssText = cssText;
    }

    putElementToEdit(elementType){
        this.node.innerHTML = "";
        this.node.appendChild(this.setElementToEdit(elementType))
    }

    static buildFromId(id){
        return new ContentArea(id);
    }
}

export default ContentArea;