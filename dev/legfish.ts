class Legfish extends Fish{

    private game : Game

    constructor(game:Game){
        super("legfish",0);
        this.speedX = 3.5;
        this.speedY = 3.5;
        this.game = game;
        this.click;
        this.div.addEventListener("click", () => this.click());
    }

    private click() : void{
        super.clickHandler();
        this.game.points--;
        let score = document.createElement("div");
        score.setAttribute("id","score")
        document.body.appendChild(score);
        document.getElementById("score").innerHTML = "Click the legfish "+this.game.points+" more times to win!"
        if (this.game.points == 0){
            new End();
        }
    }
}

