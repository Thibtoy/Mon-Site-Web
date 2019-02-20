game.players = {};
game.players.board = [];
game.players.tour = 1;
game.players.end = 0;

class Players {

	constructor (player, hand, nom, pioche) {

		this.player = player;
		this.hand = document.getElementById("hand"+hand);
		this.nom = document.getElementById(nom);
		this.pioche = document.getElementById(pioche);
		this.c = 0;
		this.clique = (event) => {
			this.c += 1;        
        if (this.c === 1) {
          document.onmousemove = this.maousemauve;
        }
        if (this.c === 2) {
          this.c = 0;
        }
		}

		this.maousemauve = (event) => {           
        	if (this.c === 1){
              this.hand.style.left = event.clientX-110+'px';    
              this.hand.style.top = event.clientY-40+'px';
        	}      
        }

    this.getDomini = (event) => {
      let dom = document.getElementById('pioche').childNodes[1];
      let doum = document.getElementById('pioche').childNodes[10];
      console.log(doum);
      if (doum == undefined) {game.players.end += 1;}
      else {document.getElementById('hand'+game.players.tour).appendChild(dom);}
  		setTimeout(game.players.gestion, 40);
    }

    this.pioche.onclick = this.getDomini; 
    this.nom.onclick = this.clique;
    game.players.board.push(this);
	}
}


game.players.gestion = function(){
  var n = game.players.board.length;
  game.players.tour += 1;
  if (game.players.tour > game.players.board.length) {
    game.players.tour = 1;
  } 
  for (var i = 0; i < n; i++) {
  var t = game.players.tour - 1;    
    if(i === t) {
    alert("Tour du Joueur"+(t+1));
  game.players.board[i].hand.style.display = 'flex';
    }
  else  {
   game.players.board[i].hand.style.display = 'none';           
    }
  }
}

game.players.win = function() {
  var t = game.players.tour;
  if (document.getElementById('hand'+t).childNodes[2] == undefined) {
          alert("Le Joueur"+" "+t+" "+"Remporte La Partie!!");
          document.location.reload();
        }
else {game.players.gestion();}
}