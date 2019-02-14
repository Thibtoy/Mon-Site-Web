class Playerbtn {
  constructor (id, nb) {
  	this.id = id;
    this.nb = nb;
    this.lien = document.getElementById(id)
    
    this.start = function (x) {
        document.getElementById('select').style.display = "none";
        document.getElementById('Regles').style.display = "flex";
        document.getElementById('Regles').addEventListener("submit", function () {
        event.preventDefault()
        game.new(x);
        game.music.play();
        document.getElementById('acceuil').style.display = "none";
        document.getElementById('hand1').style.display = "flex";
        document.getElementById('board').style.display = "block";
        document.getElementById('pioche').style.display = "none";
        });
      }

      this.clique = (e) => {
        this.start(this.nb);
    /*else
      if (this.id === 'p3') {
        document.getElementById('select').style.display = "none";
        document.getElementById('Regles').style.display = "flex";
        document.getElementById('Regles').addEventListener("submit", function () {
        event.preventDefault()
        game.new(3);
        game.music.play();
        document.getElementById('acceuil').style.display = "none";
        document.getElementById('hand1').style.display = "flex";
        document.getElementById('board').style.display = "block";
        document.getElementById('pioche').style.display = "none";
        });
      }
    else {
        document.getElementById('select').style.display = "none";
        document.getElementById('Regles').style.display = "flex";
        document.getElementById('Regles').addEventListener("submit", function () {
        event.preventDefault()
        game.new(4);
        game.music.play();
        document.getElementById('acceuil').style.display = "none";
        document.getElementById('hand1').style.display = "flex";
        document.getElementById('board').style.display = "block";
        document.getElementById('pioche').style.display = "none";
        });
      }*/
    }
    this.lien.onclick = this.clique;
  }
}

var b2 = new Playerbtn('p2', 2);
var b3 = new Playerbtn('p3', 3);
var b4 = new Playerbtn('p4', 4);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var game = {};
game.tour = 0;
game.music = document.querySelector("#music2");

game.new = function(x) {
  game.map.generateMap();
  for (var i = 1; i <= x; i++) {
    new Players(i, i, "j"+i, "piochej"+i);
  }
  game.dominos.generateDominos();
  game.dominos.shuffle(game.dominos.pioche);
  game.dominos.setPioche(game.dominos.pioche);
  game.dominos.hands();
  /*if (x === 2) {
	game.map.generateMap();
	new Players(1, 1, "j1", "piochej1");
	new Players(2, 2, "j2", "piochej2");
	game.dominos.generateDominos();
	game.dominos.shuffle(game.dominos.pioche);
	game.dominos.setPioche(game.dominos.pioche);
	game.dominos.hands();
  }
else
  if (x === 3) {
	game.map.generateMap();
	new Players(1, 1, "j1", "piochej1");
	new Players(2, 2, "j2", "piochej2");
	new Players(3, 3, "j3", "piochej3");
	game.dominos.generateDominos();
	game.dominos.shuffle(game.dominos.pioche);
	game.dominos.setPioche(game.dominos.pioche);
	game.dominos.hands();
  }
else {
	game.map.generateMap();
	new Players(1, 1, "j1", "piochej1");
	new Players(2, 2, "j2", "piochej2");
	new Players(3, 3, "j3", "piochej3");
	new Players(4, 4, "j4", "piochej4");
	game.dominos.generateDominos();
	game.dominos.shuffle(game.dominos.pioche);
	game.dominos.setPioche(game.dominos.pioche);
	game.dominos.hands();
  }*/
}

