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
var Diver = (function () {
    function Diver() {
    }
    return Diver;
}());
var Fish = (function () {
    function Fish(fish, speedF) {
        var _this = this;
        this.div = document.createElement(fish);
        document.body.appendChild(this.div);
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.speedX = Math.ceil(Math.random() * speedF);
        this.speedY = Math.ceil(Math.random() * speedF);
        this.div.addEventListener("click", function (e) { return _this.clickHandler(e); });
    }
    Fish.prototype.clickHandler = function (e) {
        this.div.clientWidth * 1.5;
        this.div.clientHeight * 1.5;
        console.log("hoi ik klik");
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
        this.fishes = new Array();
        for (var i = 0; i < 20; i++) {
            this.fishes.push(new Yellowfish());
            this.fishes.push(new Pufferfish());
        }
        for (var i = 0; i < 1; i++) {
            this.fishes.push(new Legfish());
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
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
    function Legfish() {
        var _this = _super.call(this, "legfish", 20) || this;
        _this.speedX = 15;
        _this.speedY = 15;
        return _this;
    }
    Legfish.prototype.clickHandler = function (e) {
        console.log("ik klik ook");
    };
    return Legfish;
}(Fish));
window.addEventListener("load", function () {
    new Game();
});
var Pufferfish = (function (_super) {
    __extends(Pufferfish, _super);
    function Pufferfish() {
        return _super.call(this, "pufferfish", 2) || this;
    }
    return Pufferfish;
}(Fish));
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