/*
  CLASS SAUCER < MOBILE
*/

class Saucer extends Mobile {
  constructor(x, y) {
    super(x, y, "../images/flyingSaucer-petit.png", 3, 0);
  }

  move(canvas){
    this.moveLeft();
    super.move(canvas);
    if(this.x <= 0){
      this.todelete = true;
    }
  }

  // collisionWith(Shoot){
  //   return Shoot.isInside(this.x, this.y)
  // }
}
