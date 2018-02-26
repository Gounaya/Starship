/*
  CLASS MOBILE
*/

class Mobile {
  constructor(x, y, img, speedX = 0, speedY = 0) {
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = img;
    this.speedX = speedX;
    this.speedY = speedY;
    this.MoveState = { UP : 0, DOWN : 1, LEFT : 2, RIGHT : 3, NONE : 4};
    this.width = 50;
    this.height = 50;
  }

  draw(context){
    context.drawImage(this.img, this.x, this.y);
  }

  moveLeft(){
    this._moving = this.MoveState.LEFT;
  }

  moveRight(){
    this._moving = this.MoveState.RIGHT;
  }

  moveUp(){
    this._moving = this.MoveState.UP;
  }

  moveDown(){
    this._moving = this.MoveState.DOWN;
  }

  move(canvas){
    if (this._moving === this.MoveState.LEFT) {
      this.x = Math.max(0, this.x - this.speedX);
    }
    if (this._moving === this.MoveState.RIGHT) {
      this.x = Math.min(canvas.width - this.width, this.x + this.speedX);
    }
    if (this._moving === this.MoveState.UP) {
      this.y = Math.max(0, this.y - this.speedY);
    }
    if (this._moving === this.MoveState.DOWN) {
      this.y = Math.min(canvas.height - this.height, this.y + this.speedY);
    }
  }

  stopMove(){
    this._moving = this.MoveState.NONE;
  }
}
