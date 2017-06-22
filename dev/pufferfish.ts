class Pufferfish extends Fish{

    constructor(){
        super("pufferfish",2);
        this.div.addEventListener("click", () => this.clickHandler());
    }
    protected clickHandler(){
        console.log("Ik klik ook");
        //this.div.remove();
        this.div.classList.add("pufferfishbigger");

        //new End();
    }
}

