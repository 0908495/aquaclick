class Fish {

    protected div:HTMLElement;
    protected x:number;
    protected y:number;
    protected speedY:number;
    protected speedX:number;

    constructor(fish:string, speedF:number) {
        this.div = document.createElement(fish)
        document.body.appendChild(this.div);
        // start positie
        this.x = (Math.random() * window.innerWidth/1.1);
        this.y = (Math.random() * window.innerHeight/1.1);
        
        // start snelheid
        this.speedX = Math.ceil(Math.random() * speedF);
        this.speedY = Math.ceil(Math.random() * speedF);

        this.div.addEventListener("click", (e: MouseEvent) => this.clickHandler(e))

    }

    protected clickHandler(e:MouseEvent){
        console.log("hoi ik klik")
        this.speedX = this.speedX*2;
        this.speedY = this.speedY*2;
        var randomColor = Math.random() * 360;
        this.div.style.webkitFilter = "hue-rotate("+randomColor+"deg)";
        this.div.style.filter = "hue-rotate("+randomColor+"deg)";
    }

    protected move() : void{

        this.x += this.speedX;
        this.y += this.speedY;
        
        if(this.x > window.innerWidth - this.div.clientWidth || this.x < 0) {
            this.speedX = -this.speedX;
        }

        if(this.y > window.innerHeight - this.div.clientHeight || this.y < 0) {
            this.speedY = -this.speedY;
        }

        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)"
    }

}

