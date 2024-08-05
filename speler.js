class speler {
    constructor() {
        this.x = 300;
        this.y=650;
        this.vy=0;
    }
    draw(ctx) {
        // ctx.beginPath();
        // ctx.rect(this.x, this.y, 50, 50);
        // ctx.fill();
        let img = new Image();
        img.src = "bird.png";
        ctx.drawImage(img, this.x, this.y);
    }
    move(vy, teller) {
        this.vy = vy-teller;
        this.y = this.y-this.vy
    }
    collide(obs) {
        if(this.y<obs.height-210||this.y+40>obs.height) {
            if(this.x < obs.x+100&&this.x+50>obs.x) { 
                return true;
            }
        }
    }
}