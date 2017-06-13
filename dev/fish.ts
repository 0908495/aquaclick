class Fish {

    protected div:HTMLElement;
    x:number;
    y:number;
    speedY:number;
    speedX:number;

    constructor(fish:string, speedF:number) {
        this.div = document.createElement(fish);
        document.body.appendChild(this.div);
        // start positie
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        
        // start snelheid
        this.speedX = Math.ceil(Math.random() * speedF);
        this.speedY = Math.ceil(Math.random() * speedF);

        this.div.addEventListener("click", (e: MouseEvent) => this.clickHandler(e))
    }

    protected clickHandler(e:MouseEvent){
        this.div.clientWidth *1.5;
        this.div.clientHeight *1.5;
        console.log("hoi ik klik")
    }

    public move() : void{

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

