class Form{
    constructor(id){
        this.id = id;
        this.node = document.getElementById(id);
        this.callback;
    }

    listenSubmit(callback){
        this.node.addEventListener('submit',function(e){
            e.preventDefault();
            callback();
        })
        this.callback = callback;
    }

    submit(){
        this.callback();
    }

    static buildFromId(id){
        return new Form(id);
    }
}

export default Form;