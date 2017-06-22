class Game {

    private fishes : Array<Fish>;
    public points : number = 3;
 
    constructor() {
        this.fishes = new Array<Fish>();

        for (var i = 0; i < 1; i++){
            this.fishes.push(new Legfish(this));
        }

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
        //score.innerHTML = "Je moet nog "+this.game.points+"keer de legfish klikken om te winnen!"
        document.getElementById("score").innerHTML = "Je moet nog "+this.points+"keer de legfish klikken om te winnen!"
    }
    
    private gameLoop(){
        for (let f of this.fishes){
            f.move();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
} 