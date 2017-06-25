class Pufferfish extends Fish{

    constructor(){
        super("pufferfish",2);
        this.click;
        this.div.addEventListener("click", () => this.click());
    }

    private click(){
        super.clickHandler();
        this.div.classList.add("pufferfishbigger");
    }
}

