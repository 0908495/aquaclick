class Legfish extends Fish{

    constructor(){
        super("legfish",20);
        this.speedX = 15;
        this.speedY = 15;
        
    }
    protected clickHandler(e:MouseEvent){
        console.log("ik klik ook");
    }
}

