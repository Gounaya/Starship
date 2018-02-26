/*
  CLASS SHOOT < MOBILE
*/
class Shoot extends Mobile {
  constructor(x, y) {
      super(x, y, "../images/shoot.png", 8, 0);
  }

  move(canvas){
    this.moveRight();
    super.move(canvas);
    if(this.x >= canvas.width-50){
      this.todelete = true;
    }
  }

  isInCollisionWith(saucer){
    if(saucer.x >= this.x - 48 && saucer.x <= this.x + this.width && saucer.y >= this.y - 48 && saucer.y <= this.y + this.height){
      return true;
    }
    return false;
  }

  // isInside(x, y){
  //   if (x = this.x && y = this.y) {
  //     return true;
  //   }
  //     return false;
  // }
}
