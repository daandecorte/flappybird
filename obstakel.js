class obstakel {
    constructor(height, vx) {
        this.x = 1500;
        this.y = 650;
        this.height = height;
        this.vx = vx;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.height, 100, 650);
        ctx.rect(this.x, 0, 100, this.height-200);
        ctx.fillStyle = "black";
        ctx.fill();

        // let img1 = new Image();
        // let img2 = new Image();
        // img1.width = 100;
        // img1.height = 650;
        // img1.src = "pipe.png";
        // ctx.drawImage(img1, this.x, this.height);
        // img2.width = 100;
        // img2.height = this.height-200;
        // img2.src = "pipe2.png";
        // ctx.drawImage(img2, this.x, 0);

    }
    move(canvas) {
        this.x=this.x-this.vx;
    }
}