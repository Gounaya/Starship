/*
  MAIN FUNCTION
*/

function setupListener(){
  theGame = new Game(1200,600,document.getElementById("stars"));
  theGame.draw();
  theGame.start();
  initEvents();
}

function initEvents(){
  window.addEventListener('keydown', theGame.keyDownActionHandler.bind(theGame));
  window.addEventListener('keyup', theGame.keyUpActionHandler.bind(theGame));
  document.getElementById("nouvelleSoucoupe").addEventListener("click",theGame.addSaucer.bind(theGame));
}

window.addEventListener("load",setupListener);
