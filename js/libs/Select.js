class Select{
    constructor(id){
        this.id = id;
        this.node = document.getElementById(id);
    }

    getSelectedValue(){
        return this.node.options[this.node.selectedIndex].value;
    }

    static buildFromId(id){
        return new Select(id);
    }
}

export default Select;