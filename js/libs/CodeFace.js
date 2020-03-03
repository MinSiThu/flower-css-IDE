class CodeFace{
    constructor(selector,node){
        this.selector = selector;
        this.node = node;
    }

    setInnerText(text){
        this.node.innerText = text;
    }

    static buildFromId(id){
        return new CodeFace(id,document.getElementById(id));
    }
}

export default CodeFace;