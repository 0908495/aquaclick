class Game {

    private fishes : Array<Fish>;
    public points : number = 3;
 
    constructor() {
        this.fishes = new Array<Fish>();

        this.fishes.push(new Legfish(this));

        for (var i = 0; i < 20; i++){
            this.fishes.push(new Yellowfish());
            this.fishes.push(new Pufferfish());
        }
        requestAnimationFrame(() => this.gameLoop());
        this.showScore();
    }

    private showScore(){
        let score = document.createElement("div");
        score.setAttribute("id","score")
        document.body.appendChild(score);
        document.getElementById("score").innerHTML = "Click the legfish "+this.points+" more times to win!"
    }
    
    private gameLoop(){
        for (let f of this.fishes){
            f.move();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
} 