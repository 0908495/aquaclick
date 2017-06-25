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
    }
    return End;
}());
var Fish = (function () {
    function Fish(fish, speedF) {
        var _this = this;
        this.div = document.createElement(fish);
        document.body.appendChild(this.div);
        this.x = (Math.random() * window.innerWidth / 1.3);
        this.y = (Math.random() * window.innerHeight / 1.3);
        this.speedX = Math.ceil(Math.random() * speedF);
        this.speedY = Math.ceil(Math.random() * speedF);
        this.div.addEventListener("click", function () { return _this.clickHandler(); });
    }
    Fish.prototype.clickHandler = function () {
        this.speedX = this.speedX * 1.6;
        this.speedY = this.speedY * 1.6;
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
        this.fishes.push(new Legfish(this));
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
        document.getElementById("score").innerHTML = "Click the legfish " + this.points + " more times to win!";
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
        var _this = _super.call(this, "legfish", 0) || this;
        _this.speedX = 3.5;
        _this.speedY = 3.5;
        _this.game = game;
        _this.click;
        _this.div.addEventListener("click", function () { return _this.click(); });
        return _this;
    }
    Legfish.prototype.click = function () {
        _super.prototype.clickHandler.call(this);
        this.game.points--;
        var score = document.createElement("div");
        score.setAttribute("id", "score");
        document.body.appendChild(score);
        document.getElementById("score").innerHTML = "Click the legfish " + this.game.points + " more times to win!";
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
        _this.click;
        _this.div.addEventListener("click", function () { return _this.click(); });
        return _this;
    }
    Pufferfish.prototype.click = function () {
        _super.prototype.clickHandler.call(this);
        this.div.classList.add("pufferfishbigger");
    };
    return Pufferfish;
}(Fish));
var Start = (function () {
    function Start() {
        var _this = this;
        this.div = document.createElement("start");
        document.body.appendChild(this.div);
        this.button = document.createElement("button");
        var btnText = document.createTextNode("Play!");
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
        _this.click;
        _this.div.addEventListener("click", function () { return _this.click(); });
        return _this;
    }
    Yellowfish.prototype.click = function () {
        _super.prototype.clickHandler.call(this);
        var randomColor = Math.random() * 360;
        this.div.style.webkitFilter = "hue-rotate(" + randomColor + "deg)";
        this.div.style.filter = "hue-rotate(" + randomColor + "deg)";
    };
    return Yellowfish;
}(Fish));
//# sourceMappingURL=main.js.map