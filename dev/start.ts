class Start {

    private div:HTMLElement;
    private button: HTMLElement;

    constructor(){
        this.div = document.createElement("start");
        document.body.appendChild(this.div);
    
        this.button = document.createElement("button");
        var btnText = document.createTextNode("Play!");
        
        this.button.appendChild(btnText);
        document.body.appendChild(this.button);

        this.button.addEventListener("click", () => this.onClick());
    }

    private onClick() : void{
        this.div.remove();
        this.button.remove();

        new Game();
    }
}
