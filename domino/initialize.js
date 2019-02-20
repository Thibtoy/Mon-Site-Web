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
        //game.music.play();
        document.getElementById('acceuil').style.display = "none";
        document.getElementById('hand1').style.display = "flex";
        document.getElementById('board').style.display = "block";
        document.getElementById('pioche').style.display = "none";
        });
      }

    this.clique = (e) => {
      this.start(this.nb);
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
}

