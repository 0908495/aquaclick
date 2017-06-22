class Legfish extends Fish{

    private game : Game

    constructor(game:Game){
        super("legfish",20);
        this.speedX = 5;
        this.speedY = 5;
        this.game = game;
        
    }
    protected clickHandler(e:MouseEvent){
        console.log("ik ben snel");
        this.game.points--;
        let score = document.createElement("div");
        score.setAttribute("id","score")
        document.body.appendChild(score);
        //score.innerHTML = "Je moet nog "+this.game.points+"keer de legfish klikken om te winnen!"
        document.getElementById("score").innerHTML = "Je moet nog "+this.game.points+" keer de legfish klikken om te winnen!"
        if (this.game.points == 0){
            new End();
        }

    }


}

