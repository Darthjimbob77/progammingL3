class invaderB {
    constructor(x, y, w, h, c, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.ySpeed = ySpeed;
    }
    draw() {
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }

    move() {
        this.y += this.ySpeed;

    }

    outOfBounds() {
        return this.y > canvas.height;
    }
    
//    hasHitItem(item) {
//        return ((this.x + this.w) >= player.x &&
//                this.x <= (player.x + player.w)) &&
//            (this.y + this.h >= player.y &&
//                this.y <= (player.y + player.h));
//
//    }
//
//    hasHitPlayer(player) {
//        return this.hasHitItem(player);
//    }
//
//    hasCollided() {
//        var self = this;
//        var collided = false;
//        if (self.hasHitPLayer(player)) {
//                endgame = false;
//            console.log('dead');
//            }
//
//    }
}