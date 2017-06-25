class Fish {

    protected div:HTMLElement;
    protected x:number;
    protected y:number;
    protected speedY:number;
    protected speedX:number;

    constructor(fish:string, speedF:number) {
        this.div = document.createElement(fish)
        document.body.appendChild(this.div);

        this.x = (Math.random() * window.innerWidth/1.3);
        this.y = (Math.random() * window.innerHeight/1.3);
        
        this.speedX = Math.ceil(Math.random() * speedF);
        this.speedY = Math.ceil(Math.random() * speedF);

        this.div.addEventListener("click", () => this.clickHandler());
    }

    protected clickHandler() : void{
        this.speedX = this.speedX*1.6;
        this.speedY = this.speedY*1.6;
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

