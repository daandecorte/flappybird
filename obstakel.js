class obstakel {
    constructor(height, vx) {
        this.x = 1500;
        this.y = 650;
        this.height = height;
        this.vx = vx;
    }
    draw(ctx) {
        let img1 = new Image();
        let img2 = new Image();
        img1.src = "pipe.png";
        ctx.drawImage(img1, this.x, this.height);
        img2.src = "pipe2.png";
        ctx.drawImage(img2, this.x, this.height-800);

    }
    move(canvas) {
        this.x=this.x-this.vx;
    }
}