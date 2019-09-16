class Player {
    constructor(x, y, w, h, c, xSpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.xSpeed = xSpeed;
    }

    draw() {
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);

    }

    move() {
        if (rightKeyPressed && this.x < canvas.width - this.w) {
            this.x += this.xSpeed;
        }
        if (leftKeyPressed && this.x > 0) {
            this.x -= this.xSpeed;
        }


    }
    startPos() {
        this.x = canvas.width / 2 - this.w / 2;
        this.y = 450;
        startingPos = false;

    }
}
