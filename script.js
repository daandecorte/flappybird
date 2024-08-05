let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let p = document.querySelector("p");

let springen = false;

let spel = new speler();
let spelen = true;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let obstakels = []

let teller = 0;
let vy = 12;
let interval;

let punten = 0;
let highscore = 0;
let speed = 15;
let tijd = 0;

function loop() {
    if(tijd%100 ==0) {
        obstakels.push(new obstakel(random(250, 700), 5));
    }
    ctx.clearRect(0,0,1500,700);
    obstakels.forEach((el) => {
        el.draw(ctx);
        el.move(canvas);
    })
    spel.draw(ctx);
    if(springen == true) {
        spel.move(vy, teller);
        teller++;
    }
    else {
        spel.move(0,0);
    }
    obstakels.forEach((el) => {
        if(spel.collide(el)) {
            clearInterval(interval);
            spelen = false;
            if(punten>highscore) {highscore = punten};
        } 
    })
    if(spel.y > 700) {
        clearInterval(interval);
        spelen = false;
    }
    if(obstakels[0].x+100<0) {
        obstakels.shift();
        punten++;
    }
    p.innerHTML = "Punten: " + punten + "&emsp;Highscore: " + highscore;
    tijd++;
}
interval = setInterval(loop, speed);
document.body.onkeydown = function() {
    springen=true;
    teller=0;
    if(spelen == false) {
        obstakels = []
        spel = new speler();
        speed = 15;
        teller = 0;
        interval = setInterval(loop, speed);
        spelen = true;
        punten = 0;
        tijd=0;
    }
}
