var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var End = (function () {
    function End() {
        this.div = document.createElement("end");
        document.body.appendChild(this.div);
        var h = document.createElement("H1");
        var t = document.createTextNode("Je hebt de snelle vis te pakken gekregen!");
        h.appendChild(t);
        document.body.appendChild(h);
    }
    return End;
}());
var Fish = (function () {
    function Fish(fish, speedF) {
        var _this = this;
        this.div = document.createElement(fish);
        document.body.appendChild(this.div);
        this.x = (Math.random() * window.innerWidth / 1.1);
        this.y = (Math.random() * window.innerHeight / 1.1);
        this.speedX = Math.ceil(Math.random() * speedF);
        this.speedY = Math.ceil(Math.random() * speedF);
        this.div.addEventListener("click", function (e) { return _this.clickHandler(e); });
    }
    Fish.prototype.clickHandler = function (e) {
        console.log("hoi ik klik");
        this.speedX = this.speedX * 2;
        this.speedY = this.speedY * 2;
        var randomColor = Math.random() * 360;
        this.div.style.webkitFilter = "hue-rotate(" + randomColor + "deg)";
        this.div.style.filter = "hue-rotate(" + randomColor + "deg)";
    };
    Fish.prototype.move = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > window.innerWidth - this.div.clientWidth || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y > window.innerHeight - this.div.clientHeight || this.y < 0) {
            this.speedY = -this.speedY;
        }
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.points = 3;
        this.fishes = new Array();
        for (var i = 0; i < 1; i++) {
            this.fishes.push(new Legfish(this));
        }
        for (var i = 0; i < 20; i++) {
            this.fishes.push(new Yellowfish());
            this.fishes.push(new Pufferfish());
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
        this.showScore();
    }
    Game.prototype.showScore = function () {
        var score = document.createElement("div");
        score.setAttribute("id", "score");
        document.body.appendChild(score);
        document.getElementById("score").innerHTML = "Je moet nog " + this.points + "keer de legfish klikken om te winnen!";
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.fishes; _i < _a.length; _i++) {
            var f = _a[_i];
            f.move();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
var Legfish = (function (_super) {
    __extends(Legfish, _super);
    function Legfish(game) {
        var _this = _super.call(this, "legfish", 20) || this;
        _this.speedX = 5;
        _this.speedY = 5;
        _this.game = game;
        return _this;
    }
    Legfish.prototype.clickHandler = function (e) {
        console.log("ik ben snel");
        this.game.points--;
        var score = document.createElement("div");
        score.setAttribute("id", "score");
        document.body.appendChild(score);
        document.getElementById("score").innerHTML = "Je moet nog " + this.game.points + " keer de legfish klikken om te winnen!";
        if (this.game.points == 0) {
            new End();
        }
    };
    return Legfish;
}(Fish));
window.addEventListener("load", function () {
    new Start();
});
var Pufferfish = (function (_super) {
    __extends(Pufferfish, _super);
    function Pufferfish() {
        var _this = _super.call(this, "pufferfish", 2) || this;
        _this.div.addEventListener("click", function () { return _this.clickHandler(); });
        return _this;
    }
    Pufferfish.prototype.clickHandler = function () {
        console.log("Ik klik ook");
        this.div.classList.add("pufferfishbigger");
    };
    return Pufferfish;
}(Fish));
var Start = (function () {
    function Start() {
        var _this = this;
        this.div = document.createElement("start");
        document.body.appendChild(this.div);
        this.button = document.createElement("BUTTON");
        var btnText = document.createTextNode("SPELEN");
        console.log(this.button);
        this.button.appendChild(btnText);
        document.body.appendChild(this.button);
        this.button.addEventListener("click", function () { return _this.onClick(); });
    }
    Start.prototype.onClick = function () {
        this.div.remove();
        this.button.remove();
        new Game();
    };
    return Start;
}());
var Yellowfish = (function (_super) {
    __extends(Yellowfish, _super);
    function Yellowfish() {
        var _this = _super.call(this, "yellowfish", 5) || this;
        _this.clickHandler;
        return _this;
    }
    return Yellowfish;
}(Fish));
//# sourceMappingURL=main.js.map