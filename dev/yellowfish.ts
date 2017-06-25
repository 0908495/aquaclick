class Yellowfish extends Fish{

    constructor(){
        super("yellowfish",5);
        this.click;
        this.div.addEventListener("click", () => this.click());
    }

    private click() : void{
        super.clickHandler();
        var randomColor = Math.random() * 360;
        this.div.style.webkitFilter = "hue-rotate("+randomColor+"deg)";
        this.div.style.filter = "hue-rotate("+randomColor+"deg)";
    }
}

