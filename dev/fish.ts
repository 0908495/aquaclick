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
        this.x = (Math.random() * (window.innerWidth/2)) + (window.innerWidth/4);
        this.y = (Math.random() * (window.innerHeight/2)) + (window.innerHeight/4);
        
        // start snelheid
        this.speedX = Math.ceil(Math.random() * speedF);
        this.speedY = Math.ceil(Math.random() * speedF);

        this.div.addEventListener("click", (e: MouseEvent) => this.clickHandler(e))
    }

    protected clickHandler(e:MouseEvent){
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

