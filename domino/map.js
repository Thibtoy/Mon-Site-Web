game.map = {};

class  Square {
  constructor(id, x, y, par) {
	this.id = document.createElement('div');
	this.id.setAttribute("class", "square");
	this.id.setAttribute("pos-x", x);
	this.id.setAttribute("pos-y", y);
	this.id.setAttribute("value", 28);
	this.id.setAttribute("dispo", "libre");
	this.par = par;
	this.par.appendChild(this.id);
  }
}

game.map.generateMap = function() {
  document.getElementById("board").innerHTML = "";
  var board = document.getElementById("board");
  for (var i = 0; i < 72; i++) {
    var row = document.createElement('div');
    row.setAttribute("class", "row");
    board.appendChild(row);
    for (var j = 0; j < 120; j++) {
      new Square(j+"/"+i, j+1, i+1, row);
    }
  }
}



