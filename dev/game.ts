class Game {

    private fishes : Array<Fish>;
 
    constructor() {
        this.fishes = new Array<Fish>();

        for (var i = 0; i < 20; i++){
            this.fishes.push(new Yellowfish());
            this.fishes.push(new Pufferfish());
        }

        for (var i = 0; i < 1; i++){
            this.fishes.push(new Legfish());
        }

        requestAnimationFrame(() => this.gameLoop());
    }
    
    private gameLoop(){
        for (let f of this.fishes){
            f.move();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
} 