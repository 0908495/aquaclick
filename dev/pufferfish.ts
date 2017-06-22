class Pufferfish extends Fish{

    constructor(){
        super("pufferfish",2);
    }
    protected clickHandler(e:MouseEvent){
        this.div.style.transform = "scale("+200+"px, "+200+"px)";
        console.log("Ik klik oooook");
        new End();
    }
}

