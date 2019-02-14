game.dominos = {};
game.dominos.pioche = []; 
game.dominos.leDomino = {};
game.dominos.lastRotate = 0

class Domino {
  constructor (id, side1, side2) {
    this.id = id;
    this.side1 = side1;
    this.side2 = side2;
    this.lien = document.getElementById(id);
    this.par = document.getElementById('board');
    this.c = 0;
    this.ag = 0; 

    this.clique = (event) => {
      this.c = 0
      this.c += 1
      if (this.c === 1) {
        console.log(this);
        this.par.appendChild(this.lien);
        this.lien.style.position = 'absolute';
        document.addEventListener("mousemove", this.maousemauve);
        this.par.addEventListener("wheel", this.rotate);
        this.par.addEventListener("click", this.secondClick);
      }                                    
    }

    this.secondClick = (event) => {
      this.c +=1
      if (this.c === 2) {
        document.removeEventListener("mousemove", this.maousemauve);
        this.par.removeEventListener("wheel", this.rotate); 
        this.lien.removeEventListener("click", this.clique);
        this.lien.style.left = ((Math.round(parseInt(this.lien.style.left, 10) /10))*10)+2+"px";    
        this.lien.style.top = ((Math.round(parseInt(this.lien.style.top, 10) /10))*10)+2+"px";
        var posx = (parseInt(this.lien.style.left, 10)+8)/10; 
        var posy = (parseInt(this.lien.style.top, 10)+8)/10;
        var side1 = this.side1;
        var side2 = this.side2;
        if (game.tour === 0) {
          if (this.ag === 0) {
            for (var i = -2; i < 4; i++) {
              if (i === 0 || i === 1) {
                for (var k = -2; k < 0; k++) {
                  var pox = document.querySelector(".square[pos-x='"+(posx+i)+"'][pos-y='"+(posy+k)+"']");
                  pox.setAttribute("value", side1);
                  pox.setAttribute("dispo", "libre");
                }
              }
              for (var j = 0; j < 2; j++) {
                if (i === 0 || i === 1){
                  var pox = document.querySelector(".square[pos-x='"+(posx+i)+"'][pos-y='"+(posy+j)+"']");
                  pox.setAttribute("value", side1);
                  pox.setAttribute("dispo", "occupée");
                } 
                else {
                  var pox = document.querySelector(".square[pos-x='"+(posx+i)+"'][pos-y='"+(posy+j)+"']");
                  pox.setAttribute("value", side1);
                  pox.setAttribute("dispo", "libre");
                }
              }     
            }
            for (var i = -2; i < 4; i++) {
              if (i === 0 || i === 1) {
                for (var k = 4; k < 6 ; k++) {
                  var pox = document.querySelector(".square[pos-x='"+(posx+i)+"'][pos-y='"+(posy+k)+"']");
                  pox.setAttribute("value", side2);
                  pox.setAttribute("dispo", "libre");
                }
              }
              for (var j = 2; j < 4; j++) { 
                if (i === 0 || i === 1) {
                  var pox = document.querySelector(".square[pos-x='"+(posx+i)+"'][pos-y='"+(posy+j)+"']");
                  pox.setAttribute("value", side2);
                  pox.setAttribute("dispo", "occupée");
                }
                else {
                  var pox = document.querySelector(".square[pos-x='"+(posx+i)+"'][pos-y='"+(posy+j)+"']");
                  pox.setAttribute("value", side2);
                  pox.setAttribute("dispo", "libre");
                }
              } 
            }
          }
        else
          if (this.ag === 180) {
            for (var i = -2; i < 4; i++) {
              if (i === 0 || i === 1) {
                for (var k = -2; k < 0; k++) {
                  var pox = document.querySelector(".square[pos-x='"+(posx+i)+"'][pos-y='"+(posy+k)+"']");
                  pox.setAttribute("value", side2);
                  pox.setAttribute("dispo", "libre");
                }
              }
              for (var j = 0; j < 2; j++) {
                if (i === 0 || i === 1){
                  var pox = document.querySelector(".square[pos-x='"+(posx+i)+"'][pos-y='"+(posy+j)+"']");
                  pox.setAttribute("value", side2);
                  pox.setAttribute("dispo", "occupée");
                } 
                else {
                  var pox = document.querySelector(".square[pos-x='"+(posx+i)+"'][pos-y='"+(posy+j)+"']");
                  pox.setAttribute("value", side2);
                  pox.setAttribute("dispo", "libre");
                  }
              }     
            }
            for (var i = -2; i < 4; i++) {
              if (i === 0 || i === 1) {
                for (var k = 4; k < 6 ; k++) {
                  var pox = document.querySelector(".square[pos-x='"+(posx+i)+"'][pos-y='"+(posy+k)+"']");
                  pox.setAttribute("value", side1);
                  pox.setAttribute("dispo", "libre");
                }
              }
              for (var j = 2; j < 4; j++) { 
                if (i === 0 || i === 1) {
                  var pox = document.querySelector(".square[pos-x='"+(posx+i)+"'][pos-y='"+(posy+j)+"']");
                  pox.setAttribute("value", side1);
                  pox.setAttribute("dispo", "occupée");
                }
                else {
                  var pox = document.querySelector(".square[pos-x='"+(posx+i)+"'][pos-y='"+(posy+j)+"']");
                  pox.setAttribute("value", side1);
                  pox.setAttribute("dispo", "libre");
                }
              } 
            }
          }
        else 
          if (this.ag === 90) {
            for (var i = -1 ; i < 5; i++){
              if (i === 1 || i === 2){
                for (var j = -3; j <-1; j++){
                  var pox = document.querySelector(".square[pos-x='"+(posx+j)+"'][pos-y='"+(posy+i)+"']");
                  pox.setAttribute("value", side2);
                  pox.setAttribute("dispo", "libre");
                }
                for (var j = -1; j < 1; j++) {
                  var pox = document.querySelector(".square[pos-x='"+(posx+j)+"'][pos-y='"+(posy+i)+"']");
                  pox.setAttribute("value", side2);
                  pox.setAttribute("dispo", "occupée");
                }
                for (var j = 1; j < 3; j++){
                  var pox = document.querySelector(".square[pos-x='"+(posx+j)+"'][pos-y='"+(posy+i)+"']");
                  pox.setAttribute("value", side1);
                  pox.setAttribute("dispo", "occupée");
                }
                for (var j = 3; j < 5; j++) {
                  var pox = document.querySelector(".square[pos-x='"+(posx+j)+"'][pos-y='"+(posy+i)+"']");
                  pox.setAttribute("value", side1);
                  pox.setAttribute("dispo", "libre");
                }
              }
            else {
                for (var j = -1; j < 3; j++) {
                  if (j === -1 || j === 0){
                    var pox = document.querySelector(".square[pos-x='"+(posx+j)+"'][pos-y='"+(posy+i)+"']");
                    pox.setAttribute("value", side2);
                    pox.setAttribute("dispo", "libre");
                  }
                  if (j === 1 || j === 2) {
                    var pox = document.querySelector(".square[pos-x='"+(posx+j)+"'][pos-y='"+(posy+i)+"']");
                    pox.setAttribute("value", side1);
                    pox.setAttribute("dispo", "libre");
                  }
                }
              }    
            }
          }
        else { 
            for (var i = -1 ; i < 5; i++){
              if (i === 1 || i === 2){
                for (var j = -3; j <-1; j++){
                  var pox = document.querySelector(".square[pos-x='"+(posx+j)+"'][pos-y='"+(posy+i)+"']");
                  pox.setAttribute("value", side1);
                  pox.setAttribute("dispo", "libre");
                }
                for (var j = -1; j < 1; j++) {
                  var pox = document.querySelector(".square[pos-x='"+(posx+j)+"'][pos-y='"+(posy+i)+"']");
                  pox.setAttribute("value", side1);
                  pox.setAttribute("dispo", "occupée");
                }
                for (var j = 1; j < 3; j++){
                  var pox = document.querySelector(".square[pos-x='"+(posx+j)+"'][pos-y='"+(posy+i)+"']");
                  pox.setAttribute("value", side2);
                  pox.setAttribute("dispo", "occupée");
                }
                for (var j = 3; j < 5; j++) {
                  var pox = document.querySelector(".square[pos-x='"+(posx+j)+"'][pos-y='"+(posy+i)+"']");
                  pox.setAttribute("value", side2);
                  pox.setAttribute("dispo", "libre");
                }
              }
            else {
                for (var j = -1; j < 3; j++) {
                  if (j === -1 || j === 0){
                    var pox = document.querySelector(".square[pos-x='"+(posx+j)+"'][pos-y='"+(posy+i)+"']");
                    pox.setAttribute("value", side1);
                    pox.setAttribute("dispo", "libre");
                  }
                  if (j === 1 || j === 2) {
                    var pox = document.querySelector(".square[pos-x='"+(posx+j)+"'][pos-y='"+(posy+i)+"']");
                    pox.setAttribute("value", side2);
                    pox.setAttribute("dispo", "libre");
                  }
                }
              }    
            }    
          }
          game.tour = 1;
          game.dominos.lastRotate = this.ag;
          game.players.win(); 
        }
      else {
                            if (this.ag === 0 || this.ag === 180) {
                            var okside1 = 0;
                            var okside2 = 0;
                              for (var i = 0; i < 2; i++) {
                                for (var j = 0; j < 2; j++) {
                                 var pox = document.querySelector(".square[pos-x='"+(posx+i)+"'][pos-y='"+(posy+j)+"']");
                                 var comp = pox.getAttribute("value");
                                 var disp = pox.getAttribute("dispo");
                                  if (this.ag === 0) {
                                    if (comp == this.side1 && disp == "libre") {
                                      okside1 +=1;
                                    }
                                  }
                                  else
                                    if (this.ag === 180) {
                                      if (comp == this.side2 && disp == "libre") {
                                        okside1 +=1;
                                      }
                                    }
                                    }//

                                      }//
                                      for (var i = 0; i < 2; i++) {
                                for (var j = 2; j < 4; j++) {
                                 var pox = document.querySelector(".square[pos-x='"+(posx+i)+"'][pos-y='"+(posy+j)+"']");
                                 var comp = pox.getAttribute("value");
                                 var disp = pox.getAttribute("dispo");
                                 if (this.ag === 0) {
                                  if (comp == this.side2 && disp == "libre") {
                                    okside2 +=1;
                                  }
                                 }
                                 else
                                   if (this.ag === 180) {
                                    if (comp == this.side1 && disp == "libre") {
                                    okside2 +=1;
                                  }
                                   }
                                    }//

                                      }


                                if (okside1 === 4) {
                                   this.par.removeEventListener("click", this.secondClick);
                                      var occ = 0;
                                      var occg = 0;
                                      var occd = 0;
                                      var okElseOccd = 0;
                                      var okElseOccg = 0;
                                      var okElseOccdh = 0;
                                      var okElseOccgh = 0;
                                      var okElseOccdb = 0;
                                      var okElseOccgb = 0;
                                        for (var a = 0; a < 2; a++) {// occ
                                          for (var b = -4; b < 0; b++) {

                                           var pos = document.querySelector(".square[pos-x='"+(posx+a)+"'][pos-y='"+(posy+b)+"']");
                                           var cmp = pos.getAttribute("dispo");
                                           game.dominos.lastRotate = this.ag;
                                             if (cmp != "libre") {
                                              occ += 1;
                                             }
                                          }
                                        }
                                                      for (var u = -2; u < 2; u++) {//occg
                                                          for (var t = -2; t < 0; t++) {
                                                            var pou = document.querySelector(".square[pos-x='"+(posx+u)+"'][pos-y='"+(posy+t)+"']");
                                                            var cmpoug = pou.getAttribute("dispo");
                                                            if (cmpoug != "libre") {
                                                                occg += 1;
                                                            }
                                                          }
                                                        }
                                                       for (var u = 0; u < 4; u++) {//occd
                                                          for (var t = -2; t < 0; t++) {
                                                            var poud = document.querySelector(".square[pos-x='"+(posx+u)+"'][pos-y='"+(posy+t)+"']");
                                                            var cmpoud = poud.getAttribute("dispo");
                                                              if (cmpoud != "libre") {
                                                                occd += 1;
                                                              }
                                                              

                                                          }
                                                        }


                                              for (var o = 2; o < 6; o++) {// okoccd
                                                for (var p = 0; p < 2; p++) {
                                                
                                                var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                var cmpElseOccd = poy.getAttribute("dispo");
                                                  if (cmpElseOccd != "libre") {
                                                    okElseOccd += 1;
                                                  }
                                              }
                                            }


                                            for (var o = -4; o < 0; o++) {// ok ooccg
                                              for (var p = 0; p < 2; p++) {
                                                
                                                var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                var cmpElseOccg = poy.getAttribute("dispo");
                                                  if (cmpElseOccg != "libre") {
                                                    okElseOccg += 1;
                                                  }
                                              }
                                            }

                                            for (var o = 2; o < 4; o++) {// ok oocdh
                                              for (var p = -2; p < 2; p++) {
                                                
                                                var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                var cmpElseOccdh = poy.getAttribute("dispo");
                                                  if (cmpElseOccdh != "libre") {
                                                    okElseOccdh += 1;
                                                  }
                                              }
                                            }

                                             for (var o = -2; o < 0; o++) {// ok ooccgh
                                              for (var p = -2; p < 2; p++) {
                                                
                                                var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                var cmpElseOccg = poy.getAttribute("dispo");
                                                  if (cmpElseOccg != "libre") {
                                                    okElseOccgh += 1;
                                                  }
                                              }
                                            }

                                            for (var o = 2; o < 4; o++) {// ok occdb
                                              for (var p = 0; p < 4; p++) {
                                                var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                var cmpElseOccdb = poy.getAttribute("dispo");
                                                  if (cmpElseOccdb != "libre") {
                                                    okElseOccdb += 1;
                                                  }
                                              }
                                            }

                                            for (var o = -2; o < 0; o++) {// ok occgb
                                              for (var p = 0; p < 4; p++) {
                                                var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                var cmpElseOccgb = poy.getAttribute("dispo");
                                                  if (cmpElseOccgb != "libre") {
                                                    okElseOccgb += 1;
                                                  }
                                              }
                                            }
                                                    
                                                      if (occ === 8) {
                                                        for (var u = -2; u < 0; u++) {
                                                          for (var t = -2; t < 0; t++) {
                                                            var pou = document.querySelector(".square[pos-x='"+(posx+u)+"'][pos-y='"+(posy+t)+"']");
                                                            pou.removeAttribute("value");
                                                            pou.setAttribute("value", 28);
                                                          }
                                                        }
                                                        for (var u = 2; u < 4; u++) {
                                                          for (var t = -2; t < 0; t++) {
                                                            var pou = document.querySelector(".square[pos-x='"+(posx+u)+"'][pos-y='"+(posy+t)+"']");
                                                            pou.removeAttribute("value");
                                                            pou.setAttribute("value", 28);
                                                          }
                                                        }
                                                        
                                                      }//if occ 8

                                                      else 
                                                        if (occg === 8) {
                                                                for (var g = 2; g < 4; g++) {
                                                                  for (var gh = -2; gh < 0; gh++) {
                                                                    var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                                                                    poug.removeAttribute("value");
                                                                    poug.setAttribute("value", 28);
                                                                  }
                                                                }
                                                                for (var g = 0; g < 2; g++) {
                                                                  for (var gh = -4; gh < -2; gh++) {
                                                                    var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                                                                    poug.removeAttribute("value");
                                                                    poug.setAttribute("value", 28);
                                                                  }
                                                                }
                                                                for (var g = -2; g < 0; g++) {
                                                                  for (var gh = 0; gh < 2; gh++) {
                                                                    var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                                                                    poug.removeAttribute("value");
                                                                    poug.setAttribute("value", 28);
                                                                  }
                                                                }
                                 
                                                              }

                                                      else  
                                                        if (occd === 8) {
                                                                for (var g = -2; g < 0; g++) {
                                                                  for (var gh = -2; gh < 0; gh++) {
                                                                    var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                                                                    poug.removeAttribute("value");
                                                                    poug.setAttribute("value", 28);
                                                                  }
                                                                }
                                                                for (var g = 2 ; g < 4; g++) {
                                                                  for (var gh = -4; gh < -2; gh++) {
                                                                    var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                                                                    poug.removeAttribute("value");
                                                                    poug.setAttribute("value", 28);
                                                                  }
                                                                }
                                                                for (var g = 2 ; g < 4; g++) {
                                                                  for (var gh = 0; gh < 2; gh++) {
                                                                    var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                                                                    poug.removeAttribute("value");
                                                                    poug.setAttribute("value", 28);
                                                                  }
                                                                }
                                         
                                                              }


                                                            if (occ === 8 || occg === 8 || occd ===8) {
                                                              for (var o = -2; o < 0; o++){
                                                                  for (var p = 2; p < 4; p++) {
                                                                    var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                                    if (this.ag === 0) {
                                                                    poy.setAttribute("value", this.side2);
                                                                    }
                                                                    else
                                                                      if (this.ag === 180) {
                                                                    poy.setAttribute("value", this.side1);
                                                                      }
                                                                  }
                                                                }
                                                        for (var o = 2; o < 4; o++){
                                                                  for (var p = 2; p < 4; p++) {
                                                                     var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                                    if (this.ag === 0) {
                                                                     poy.setAttribute("value", this.side2);
                                                                    }
                                                                    else
                                                                      if (this.ag === 180) {
                                                                     poy.setAttribute("value", this.side1);
                                                                      }
                                                                  }
                                                                }
                                                                for (var o = 0; o < 2; o++){
                                                                  for (var p = 4; p < 6; p++) {
                                                                     var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                                    if (this.ag === 0) {
                                                                     poy.setAttribute("value", this.side2);
                                                                    }
                                                                    else
                                                                      if (this.ag === 180) {
                                                                     poy.setAttribute("value", this.side1);
                                                                      }
                                                                  }
                                                                }
                                                                for (var o = 0; o < 2; o++){
                                                                  for (var p = 0; p < 4; p++) {
                                                                    if (p === 0 || p === 1) {
                                                                      var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                                    if (this.ag === 0) {
                                                                    poy.setAttribute("value", this.side1);
                                                                    poy.setAttribute("dispo", "occupée");
                                                                    }
                                                                    else
                                                                      if (this.ag === 180) {
                                                                    poy.setAttribute("value", this.side2);
                                                                    poy.setAttribute("dispo", "occupée");
                                                                      }
                                                                    }
                                                                    if (p === 2 || p === 3) {
                                                                      var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                                      if (this.ag === 0) {
                                                                    poy.setAttribute("value", this.side2);
                                                                    poy.setAttribute("dispo", "occupée");
                                                                    }
                                                                    else
                                                                      if (this.ag === 180) {
                                                                    poy.setAttribute("value", this.side1);
                                                                    poy.setAttribute("dispo", "occupée");
                                                                      }
                                                                    }
                                                    
                                                                  }
                                                                }
                                                                game.players.win();
                                                              }

 
                                          else                                                               
                                            if (okElseOccd === 8) {
                                              for (var o = 2; o < 4; o++) {
                                                for (var p = -2; p < 0; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }
                                              for (var o = 2; o < 4; o++) {
                                                for (var p = 2; p < 4; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }

                                              for (var o = 0; o < 2; o++) {
                                                for (var p = 0; p < 4; p++) {
                                                    if (p === 0 || p === 1) {
                                                       var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                    if (this.ag === 0) {
                                                     poy.setAttribute("value", this.side1);
                                                     poy.setAttribute("dispo", "occupée");
                                                    }
                                                    else
                                                      if (this.ag === 180) {
                                                     poy.setAttribute("value", this.side2);
                                                     poy.setAttribute("dispo", "occupée");
                                                      }
                                                    }
                                                    if (p === 2 || p === 3) {
                                                       var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                       if (this.ag === 0) {
                                                     poy.setAttribute("value", this.side2);
                                                     poy.setAttribute("dispo", "occupée");
                                                    }
                                                    else
                                                      if (this.ag === 180) {
                                                     poy.setAttribute("value", this.side1);
                                                     poy.setAttribute("dispo", "occupée");
                                                      }
                                                    }
                                                }
                                              }

                                              for (var o = 0; o < 2; o++) {
                                                for (var p = 4; p < 6; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  if (this.ag === 0) {
                                                     poy.setAttribute("value", this.side2);
                                                    }
                                                    else
                                                      if (this.ag === 180) {
                                                     poy.setAttribute("value", this.side1);
                                                      }
                                                }
                                              }

                                              for (var o = -2; o < 0; o++) {
                                                for (var p = 2; p < 4; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                 if (this.ag === 0) {
                                                     poy.setAttribute("value", this.side2);
                                                    }
                                                    else
                                                      if (this.ag === 180) {
                                                     poy.setAttribute("value", this.side1);
                                                      }
                                                }
                                              }
                                              game.players.win(); 
                                              
                                             
                                            }//okElseOccd

                                            else
                                             if (okElseOccg === 8) {
                                              for (var o = -3; o < 0; o++) {
                                                for (var p = -2; p < 0; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }
                                              for (var o = -3; o < 0; o++) {
                                                for (var p = 2; p < 4; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }

                                               for (var o = 0; o < 2; o++) {
                                                for (var p = 0; p < 4; p++) {
                                                    if (p === 0 || p === 1) {
                                                       var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                    if (this.ag === 0) {
                                                     poy.setAttribute("value", this.side1);
                                                     poy.setAttribute("dispo", "occupée");
                                                    }
                                                    else
                                                      if (this.ag === 180) {
                                                     poy.setAttribute("value", this.side2);
                                                     poy.setAttribute("dispo", "occupée");
                                                      }
                                                    }
                                                    if (p === 2 || p === 3) {
                                                       var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                       if (this.ag === 0) {
                                                     poy.setAttribute("value", this.side2);
                                                     poy.setAttribute("dispo", "occupée");
                                                    }
                                                    else
                                                      if (this.ag === 180) {
                                                     poy.setAttribute("value", this.side1);
                                                     poy.setAttribute("dispo", "occupée");
                                                      }
                                                    }
                                                }
                                              }

                                              for (var o = 0; o < 2; o++) {
                                                for (var p = 4; p < 6; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  if (this.ag === 0) {
                                                     poy.setAttribute("value", this.side2);
                                                    }
                                                    else
                                                      if (this.ag === 180) {
                                                     poy.setAttribute("value", this.side1);
                                                      }
                                                }
                                              }

                                              for (var o = 2; o < 4; o++) {
                                                for (var p = 2; p < 4; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  if (this.ag === 0) {
                                                     poy.setAttribute("value", this.side2);
                                                    }
                                                    else
                                                      if (this.ag === 180) {
                                                     poy.setAttribute("value", this.side1);
                                                      }
                                                }
                                              }
                                              game.players.win();
                                             
                                             
                                            }//okElseOccg

                                           else 
                                            if (okElseOccdh === 8) {
                                              for (var o = 4; o < 6; o++) {
                                                for (var p = 0; p < 2; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }
                                              for (var o = 0; o < 2; o++) {
                                                for (var p = -2; p < 0; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }
                                              for (var o = 2; o < 4; o++) {
                                                for (var p = 2; p < 4; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }

                                              for (var o = 0; o < 2; o++) {
                                                for (var p = 0; p < 4; p++) {
                                             if (p === 0 || p === 1) {
                                                       var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                    if (this.ag === 0) {
                                                     poy.setAttribute("value", this.side1);
                                                     poy.setAttribute("dispo", "occupée");
                                                    }
                                                    else
                                                      if (this.ag === 180) {
                                                     poy.setAttribute("value", this.side2);
                                                     poy.setAttribute("dispo", "occupée");
                                                      }
                                                    }
                                                    if (p === 2 || p === 3) {
                                                       var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                       if (this.ag === 0) {
                                                     poy.setAttribute("value", this.side2);
                                                     poy.setAttribute("dispo", "occupée");
                                                    }
                                                    else
                                                      if (this.ag === 180) {
                                                     poy.setAttribute("value", this.side1);
                                                     poy.setAttribute("dispo", "occupée");
                                                      }
                                                    }
                                                }
                                              }

                                              for (var o = 0; o < 2; o++) {
                                                for (var p = 4; p < 6; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  if (this.ag === 0) {
                                                     poy.setAttribute("value", this.side2);
                                                    }
                                                    else
                                                      if (this.ag === 180) {
                                                     poy.setAttribute("value", this.side1);
                                                      }
                                                }
                                              }

                                              for (var o = -2; o < 0; o++) {
                                                for (var p = 2; p < 4; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  if (this.ag === 0) {
                                                     poy.setAttribute("value", this.side2);
                                                    }
                                                    else
                                                      if (this.ag === 180) {
                                                     poy.setAttribute("value", this.side1);
                                                      }
                                                }
                                              }
                                              game.players.win();
                                             
                                             
                                            }//okElseOccdh
 

                                            else
                                             if (okElseOccgh === 8) {
                                              for (var o = -4; o < -2; o++) {
                                                for (var p = 0; p < 2; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }
                                              for (var o = 0; o < 2; o++) {
                                                for (var p = -2; p < 0; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }
                                              for (var o = -2; o < 0; o++) {
                                                for (var p = 2; p < 4; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }

                                              for (var o = 0; o < 2; o++) {
                                                for (var p = 0; p < 4; p++) {
                                                  if (p === 0 || p === 1) {
                                                       var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                    if (this.ag === 0) {
                                                     poy.setAttribute("value", this.side1);
                                                     poy.setAttribute("dispo", "occupée");
                                                    }
                                                    else
                                                      if (this.ag === 180) {
                                                     poy.setAttribute("value", this.side2);
                                                     poy.setAttribute("dispo", "occupée");
                                                      }
                                                    }
                                                    if (p === 2 || p === 3) {
                                                       var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                       if (this.ag === 0) {
                                                     poy.setAttribute("value", this.side2);
                                                     poy.setAttribute("dispo", "occupée");
                                                    }
                                                    else
                                                      if (this.ag === 180) {
                                                     poy.setAttribute("value", this.side1);
                                                     poy.setAttribute("dispo", "occupée");
                                                      }
                                                    }
                                                }
                                              }

                                              for (var o = 0; o < 2; o++) {
                                                for (var p = 4; p < 6; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                          if (this.ag === 0) {
                                                     poy.setAttribute("value", this.side2);
                                                    }
                                                    else
                                                      if (this.ag === 180) {
                                                     poy.setAttribute("value", this.side1);
                                                      }
                                                }
                                              }

                                              for (var o = 2; o < 4; o++) {
                                                for (var p = 2; p < 4; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                          if (this.ag === 0) {
                                                     poy.setAttribute("value", this.side2);
                                                    }
                                                    else
                                                      if (this.ag === 180) {
                                                     poy.setAttribute("value", this.side1);
                                                      }
                                                }
                                              }
                                              game.players.win();
                                              

                                            }//okElseOccgh

                                           
                                             else {
                                              this.retour();
                                               /* if (game.players.tour === 1 ) {
                                    this.par.removeEventListener("click", this.secondClick);
                                    var hand = document.getElementById("hand1");
                                    this.lien.style.position = "static";
                                    this.lien.style.left = 0;
                                    this.lien.style.top = 0;
                                    this.lien.addEventListener("click", this.clique);
                                    hand.appendChild(this.lien);
                                  }

                                  else
                                    if (game.players.tour === 2 ) {
                                     this.par.removeEventListener("click", this.secondClick);
                                    var hand = document.getElementById("hand2");
                                    this.lien.style.position = "static";
                                    this.lien.style.left = 0;
                                   this.lien.style.top = 0;
                                    this.lien.addEventListener("click", this.clique);
                                    hand.appendChild(this.lien);
                                  }

                                  else
                                    if (game.players.tour === 3 ) {
                                   this.par.removeEventListener("click", this.secondClick);
                                    var hand = document.getElementById("hand3");
                                      this.lien.style.position = "static";
                                      this.lien.style.left = 0;
                                     this.lien.style.top = 0;
                                    this.lien.addEventListener("click", this.clique);
                                    hand.appendChild(this.lien);
                                  }

                                  else
                                    if (game.players.tour === 4 ) {
                                     this.par.removeEventListener("click", this.secondClick);
                                    var hand = document.getElementById("hand4");
                                    this.lien.style.position = "static";
                                    this.lien.style.left = 0;
                                   this.lien.style.top = 0;
                                    this.lien.addEventListener("click", this.clique);
                                    hand.appendChild(this.lien);
                                   }*/
                                   

                                      }// okElseOccgb/okElseOccdb
                                    } // okside1 = 4
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////side 2
                                   


                                  
                                     if (okside2 === 4) {
                                   this.par.removeEventListener("click", this.secondClick);
                                      var occ = 0;
                                      var occg = 0;
                                      var occd = 0;
                                      var okElseOccd = 0;
                                      var okElseOccg = 0;
                                      var okElseOccdh = 0;
                                      var okElseOccgh = 0;
                                      var okElseOccdb = 0;
                                      var okElseOccgb = 0;
                                      for (var a = 0; a < 2; a++) {
                                        for (var b = 4; b < 8; b++) {

                                           var pos = document.querySelector(".square[pos-x='"+(posx+a)+"'][pos-y='"+(posy+b)+"']");
                                           var cmp = pos.getAttribute("dispo");
                                           game.dominos.lastRotate = this.ag;
                                             if (cmp != "libre") {
                                              occ += 1;
                                             }
                                        }
                                      }
                                       for (var u = -2; u < 2; u++) {
                                                          for (var t = 4; t < 6; t++) {
                                                            var pou = document.querySelector(".square[pos-x='"+(posx+u)+"'][pos-y='"+(posy+t)+"']");
                                                            var cmpoug = pou.getAttribute("dispo");
                                                              if (cmpoug != "libre") {
                                                                occg += 1;
                                                              }
                                                              

                                                          }
                                                        }

                                                        for (var u = 0; u < 4; u++) {
                                                          for (var t = 4; t < 6; t++) {
                                                            var poud = document.querySelector(".square[pos-x='"+(posx+u)+"'][pos-y='"+(posy+t)+"']");
                                                            var cmpoud = pou.getAttribute("dispo");
                                                              if (cmpoud != "libre") {
                                                                occd += 1;
                                                              }
                                                              

                                                          }
                                                        }
                                                                                                      for (var o = 2; o < 6; o++) {// okoccd
                                              for (var p = 2; p < 4; p++) {
                                                
                                                var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                var cmpElseOccd = poy.getAttribute("dispo");
                                                  if (cmpElseOccd != "libre") {
                                                    okElseOccd += 1;
                                                  }
                                              }
                                            }
                                            for (var o = -4; o < 0; o++) {// ok ooccg
                                              for (var p = 2; p < 4; p++) {
                                                
                                                var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                var cmpElseOccg = poy.getAttribute("dispo");
                                                  if (cmpElseOccg != "libre") {
                                                    okElseOccg += 1;
                                                  }
                                              }
                                            }

                                            for (var o = 2; o < 4; o++) {// ok oocdh
                                              for (var p = 2; p < 6; p++) {
                                                
                                                var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                var cmpElseOccdh = poy.getAttribute("dispo");
                                                  if (cmpElseOccdh != "libre") {
                                                    okElseOccdh += 1;
                                                  }
                                              }
                                            }
                                             for (var o = -2; o < 0; o++) {// ok ooccgh
                                              for (var p = 2; p < 6; p++) {
                                                
                                                var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                var cmpElseOccg = poy.getAttribute("dispo");
                                                  if (cmpElseOccg != "libre") {
                                                    okElseOccgh += 1;
                                                  }
                                              }
                                            }

                                                      if (occ === 8) {

                                                        for (var u = -2; u < 0; u++) {
                                                          for (var t = 4; t < 6; t++) {
                                                            var pou = document.querySelector(".square[pos-x='"+(posx+u)+"'][pos-y='"+(posy+t)+"']");
                                                            pou.removeAttribute("value");
                                                            pou.setAttribute("value", 28);
                                                          }
                                                        }for (var u = 2; u < 4; u++) {
                                                          for (var t = 4; t < 6; t++) {
                                                            var pou = document.querySelector(".square[pos-x='"+(posx+u)+"'][pos-y='"+(posy+t)+"']");
                                                            pou.removeAttribute("value");
                                                            pou.setAttribute("value", 28);

                                                          }
                                                        }
                                                      }//if occ 8

                                                  
                                                        
                                                       
                                                      else
                                                        if (occg === 8) {
                                                                for (var g = 2; g < 4; g++) {
                                                                  for (var gh = 4; gh < 6; gh++) {
                                                                    var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                                                                    poug.removeAttribute("value");
                                                                    poug.setAttribute("value", 28);
                                                                  }
                                                                }
                                                                for (var g = 0; g < 2; g++) {
                                                                  for (var gh = 6; gh < 8; gh++) {
                                                                    var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                                                                    poug.removeAttribute("value");
                                                                    poug.setAttribute("value", 28);
                                                                  }
                                                                }
                                                                for (var g = -2; g < 0; g++) {
                                                                  for (var gh = 2; gh < 4; gh++) {
                                                                    var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                                                                    poug.removeAttribute("value");
                                                                    poug.setAttribute("value", 28);
                                                                  }
                                                                }
                                                              }

                                                      else  
                                                        if (occd === 8) {
                                                                for (var g = -2; g < 0; g++) {
                                                                  for (var gh = 4; gh < 6; gh++) {
                                                                    var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                                                                    poug.removeAttribute("value");
                                                                    poug.setAttribute("value", 28);
                                                                  }
                                                                }
                                                                for (var g = 0 ; g < 2; g++) {
                                                                  for (var gh = 6; gh < 8; gh++) {
                                                                    var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                                                                    poug.removeAttribute("value");
                                                                    poug.setAttribute("value", 28);
                                                                  }
                                                                }
                                                                for (var g = 2 ; g < 4; g++) {
                                                                  for (var gh = 2; gh < 4; gh++) {
                                                                    var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                                                                    poug.removeAttribute("value");
                                                                    poug.setAttribute("value", 28);
                                                                  }
                                                                }
                                                              }//occd8
                                              if (occ === 8 || occd === 8 || occg === 8) {
                                                for (var o = -2; o < 0; o++){
                                                  for (var p = 0; p < 2; p++) {
                                                     var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                     if (this.ag === 0) {
                                                        poy.setAttribute("value", this.side1);
                                                     }
                                                     else
                                                      if (this.ag === 180) {
                                                        poy.setAttribute("value", this.side2);
                                                      }
                                                     
                                                  }
                                                }
                                                for (var o = 2; o < 4; o++){
                                                  for (var p = 0; p < 2; p++) {
                                                     var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                     if (this.ag === 0) {
                                                        poy.setAttribute("value", this.side1);
                                                     }
                                                     else
                                                      if (this.ag === 180) {
                                                        poy.setAttribute("value", this.side2);
                                                      }
                                                  }
                                                }
                                                for (var o = 0; o < 2; o++){
                                                  for (var p = -2; p < 0; p++) {
                                                     var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                     if (this.ag === 0) {
                                                        poy.setAttribute("value", this.side1);
                                                     }
                                                     else
                                                      if (this.ag === 180) {
                                                        poy.setAttribute("value", this.side2);
                                                      }
                                                  }
                                                }
                                                for (var o = 0; o < 2; o++){
                                                  for (var p = 0; p < 4; p++) {
                                                    if (p === 0 || p === 1) {
                                                       var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                       if (this.ag === 0) {
                                                       poy.setAttribute("value", this.side1);
                                                       poy.setAttribute("dispo", "occupée");
                                                       }
                                                       else
                                                        if (this.ag === 180) {
                                                          poy.setAttribute("value", this.side2);
                                                       poy.setAttribute("dispo", "occupée");
                                                        }
                                                    }
                                                    if (p === 2 || p === 3) {
                                                       var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                       if (this.ag === 0) {
                                                       poy.setAttribute("value", this.side2);
                                                       poy.setAttribute("dispo", "occupée");
                                                       }
                                                       else
                                                        if (this.ag === 180) {
                                                          poy.setAttribute("value", this.side1);
                                                       poy.setAttribute("dispo", "occupée");
                                                        }
                                                    }
                                                    
                                                  }
                                                }
                                                game.players.win();
                                          }//if occ,occd,occg = 8

                                            

                                          else
                                            if (okElseOccd === 8) {
                                              for (var o = 2; o < 4; o++) {
                                                for (var p = 4; p < 6; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }
                                              for (var o = 2; o < 4; o++) {
                                                for (var p = 0; p < 2; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }

                                              for (var o = 0; o < 2; o++) {
                                                for (var p = 0; p < 4; p++) {
                                                    if (p === 0 || p === 1) {
                                                       var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                       if (this.ag === 0) {
                                                       poy.setAttribute("value", this.side1);
                                                       poy.setAttribute("dispo", "occupée");
                                                       }
                                                       else
                                                        if (this.ag === 180) {
                                                          poy.setAttribute("value", this.side2);
                                                       poy.setAttribute("dispo", "occupée");
                                                        }
                                                    }
                                                    if (p === 2 || p === 3) {
                                                       var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                       if (this.ag === 0) {
                                                       poy.setAttribute("value", this.side2);
                                                       poy.setAttribute("dispo", "occupée");
                                                       }
                                                       else
                                                        if (this.ag === 180) {
                                                          poy.setAttribute("value", this.side1);
                                                       poy.setAttribute("dispo", "occupée");
                                                        }
                                                    }
                                                }
                                              }

                                              for (var o = 0; o < 2; o++) {
                                                for (var p = -2; p < 0; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  if (this.ag === 0) {
                                                        poy.setAttribute("value", this.side1);
                                                     }
                                                     else
                                                      if (this.ag === 180) {
                                                        poy.setAttribute("value", this.side2);
                                                      }
                                                }
                                              }

                                              for (var o = -2; o < 0; o++) {
                                                for (var p = 0; p < 2; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                   if (this.ag === 0) {
                                                        poy.setAttribute("value", this.side1);
                                                     }
                                                     else
                                                      if (this.ag === 180) {
                                                        poy.setAttribute("value", this.side2);
                                                      }
                                                }
                                              }
                                              game.players.win(); 
                                              
                                             
                                            }//okElseOccd
                                          //occd

//occg
                                            

                                          else
                                             if (okElseOccg === 8) {
                                              for (var o = -2; o < 0; o++) {
                                                for (var p = 4; p < 6; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }
                                              for (var o = -2; o < 0; o++) {
                                                for (var p = 0; p < 2; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }

                                               for (var o = 0; o < 2; o++) {
                                                for (var p = 0; p < 4; p++) {
                                                      if (p === 0 || p === 1) {
                                                       var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                       if (this.ag === 0) {
                                                       poy.setAttribute("value", this.side1);
                                                       poy.setAttribute("dispo", "occupée");
                                                       }
                                                       else
                                                        if (this.ag === 180) {
                                                          poy.setAttribute("value", this.side2);
                                                       poy.setAttribute("dispo", "occupée");
                                                        }
                                                    }
                                                    if (p === 2 || p === 3) {
                                                       var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                       if (this.ag === 0) {
                                                       poy.setAttribute("value", this.side2);
                                                       poy.setAttribute("dispo", "occupée");
                                                       }
                                                       else
                                                        if (this.ag === 180) {
                                                          poy.setAttribute("value", this.side1);
                                                       poy.setAttribute("dispo", "occupée");
                                                        }
                                                    }
                                                }
                                              }

                                              for (var o = 0; o < 2; o++) {
                                                for (var p = -2; p < 0; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                   if (this.ag === 0) {
                                                        poy.setAttribute("value", this.side1);
                                                     }
                                                     else
                                                      if (this.ag === 180) {
                                                        poy.setAttribute("value", this.side2);
                                                      }
                                                }
                                              }

                                              for (var o = 2; o < 4; o++) {
                                                for (var p = 0; p < 2; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                   if (this.ag === 0) {
                                                        poy.setAttribute("value", this.side1);
                                                     }
                                                     else
                                                      if (this.ag === 180) {
                                                        poy.setAttribute("value", this.side2);
                                                      }
                                                }
                                              }
                                              game.players.win();
                                             
                                             
                                            }//okElseOccg

                                          //occg

   
                                            
                                          else
                                            if (okElseOccdh === 8) {
                                              for (var o = 4; o < 6; o++) {
                                                for (var p = 2; p < 4; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }
                                              for (var o = 0; o < 2; o++) {
                                                for (var p = 4; p < 6; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }
                                              for (var o = 2; o < 4; o++) {
                                                for (var p = 0; p < 2; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }

                                              for (var o = 0; o < 2; o++) {
                                                for (var p = 0; p < 4; p++) {
                                                     if (p === 0 || p === 1) {
                                                       var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                       if (this.ag === 0) {
                                                       poy.setAttribute("value", this.side1);
                                                       poy.setAttribute("dispo", "occupée");
                                                       }
                                                       else
                                                        if (this.ag === 180) {
                                                          poy.setAttribute("value", this.side2);
                                                       poy.setAttribute("dispo", "occupée");
                                                        }
                                                    }
                                                    if (p === 2 || p === 3) {
                                                       var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                       if (this.ag === 0) {
                                                       poy.setAttribute("value", this.side2);
                                                       poy.setAttribute("dispo", "occupée");
                                                       }
                                                       else
                                                        if (this.ag === 180) {
                                                          poy.setAttribute("value", this.side1);
                                                       poy.setAttribute("dispo", "occupée");
                                                        }
                                                    }
                                                }
                                              }

                                              for (var o = 0; o < 2; o++) {
                                                for (var p = -2; p < 0; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                   if (this.ag === 0) {
                                                        poy.setAttribute("value", this.side1);
                                                     }
                                                     else
                                                      if (this.ag === 180) {
                                                        poy.setAttribute("value", this.side2);
                                                      }
                                                }
                                              }

                                              for (var o = -2; o < 0; o++) {
                                                for (var p = 0; p < 2; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                   if (this.ag === 0) {
                                                        poy.setAttribute("value", this.side1);
                                                     }
                                                     else
                                                      if (this.ag === 180) {
                                                        poy.setAttribute("value", this.side2);
                                                      }
                                                }
                                              }
                                              game.players.win();
                                             
                                             
                                            }//okElseOccdh

                                            else
                                             if (okElseOccgh === 8) {
                                              for (var o = -4; o < -2; o++) {
                                                for (var p = 2; p < 4; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }
                                              for (var o = 0; o < 2; o++) {
                                                for (var p = 4; p < 6; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }
                                              for (var o = -2; o < 0; o++) {
                                                for (var p = 0; p < 2; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  poy.removeAttribute("value");
                                                  poy.setAttribute("value", 28);
                                                }
                                              }

                                              for (var o = 0; o < 2; o++) {
                                                for (var p = 0; p < 4; p++) {
                                                   if (p === 0 || p === 1) {
                                                       var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                       if (this.ag === 0) {
                                                       poy.setAttribute("value", this.side1);
                                                       poy.setAttribute("dispo", "occupée");
                                                       }
                                                       else
                                                        if (this.ag === 180) {
                                                          poy.setAttribute("value", this.side2);
                                                       poy.setAttribute("dispo", "occupée");
                                                        }
                                                    }
                                                    if (p === 2 || p === 3) {
                                                       var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                       if (this.ag === 0) {
                                                       poy.setAttribute("value", this.side2);
                                                       poy.setAttribute("dispo", "occupée");
                                                       }
                                                       else
                                                        if (this.ag === 180) {
                                                          poy.setAttribute("value", this.side1);
                                                       poy.setAttribute("dispo", "occupée");
                                                        }
                                                    }
                                                }
                                              }

                                              for (var o = 0; o < 2; o++) {
                                                for (var p = -2; p < 0; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                   if (this.ag === 0) {
                                                        poy.setAttribute("value", this.side1);
                                                     }
                                                     else
                                                      if (this.ag === 180) {
                                                        poy.setAttribute("value", this.side2);
                                                      }
                                                }
                                              }

                                              for (var o = 2; o < 4; o++) {
                                                for (var p = 0; p < 2; p++) {
                                                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                                                  if (this.ag === 0) {
                                                        poy.setAttribute("value", this.side1);
                                                     }
                                                     else
                                                      if (this.ag === 180) {
                                                        poy.setAttribute("value", this.side2);
                                                      }
                                                }
                                              }
                                              game.players.win();
                                              
                                            }//okElseOccgh


                                            else {
                                              this.retour();
                                                /*if (game.players.tour === 1 ) {
                                    this.par.removeEventListener("click", this.secondClick);
                                    var hand = document.getElementById("hand1");
                                    this.lien.style.position = "static";
                                    this.lien.style.left = 0;
                                    this.lien.style.top = 0;
                                    this.lien.addEventListener("click", this.clique);
                                    hand.appendChild(this.lien);
                                  }

                                  else
                                    if (game.players.tour === 2 ) {
                                     this.par.removeEventListener("click", this.secondClick);
                                    var hand = document.getElementById("hand2");
                                    this.lien.style.position = "static";
                                    this.lien.style.left = 0;
                                   this.lien.style.top = 0;
                                    this.lien.addEventListener("click", this.clique);
                                    hand.appendChild(this.lien);
                                  }

                                  else
                                    if (game.players.tour === 3 ) {
                                   this.par.removeEventListener("click", this.secondClick);
                                    var hand = document.getElementById("hand3");
                                      this.lien.style.position = "static";
                                      this.lien.style.left = 0;
                                     this.lien.style.top = 0;
                                    this.lien.addEventListener("click", this.clique);
                                    hand.appendChild(this.lien);
                                  }

                                  else
                                    if (game.players.tour === 4 ) {
                                     this.par.removeEventListener("click", this.secondClick);
                                    var hand = document.getElementById("hand4");
                                    this.lien.style.position = "static";
                                    this.lien.style.left = 0;
                                   this.lien.style.top = 0;
                                    this.lien.addEventListener("click", this.clique);
                                    hand.appendChild(this.lien);
                                   }*/
                                   

                                      }// okElseOccgb/okElseOccdb
                                      
                                    } // okside2 = 4

                                else
                                  if (okside1 != 4 && okside2 !=4) {
                                    this.retour();
                                  /*if (game.players.tour === 1 ) {
                                    this.par.removeEventListener("click", this.secondClick);
                                    var hand = document.getElementById("hand1");
                                    this.lien.style.position = "static";
                                    this.lien.style.left = 0;
                                    this.lien.style.top = 0;
                                    this.lien.addEventListener("click", this.clique);
                                    hand.appendChild(this.lien);
                                  }

                                  else
                                    if (game.players.tour === 2 ) {
                                     this.par.removeEventListener("click", this.secondClick);
                                    var hand = document.getElementById("hand2");
                                    this.lien.style.position = "static";
                                    this.lien.style.left = 0;
                                   this.lien.style.top = 0;
                                    this.lien.addEventListener("click", this.clique);
                                    hand.appendChild(this.lien);
                                  }

                                  else
                                    if (game.players.tour === 3 ) {
                                   this.par.removeEventListener("click", this.secondClick);
                                    var hand = document.getElementById("hand3");
                                      this.lien.style.position = "static";
                                      this.lien.style.left = 0;
                                     this.lien.style.top = 0;
                                    this.lien.addEventListener("click", this.clique);
                                    hand.appendChild(this.lien);
                                  }

                                  else
                                    if (game.players.tour === 4 ) {
                                     this.par.removeEventListener("click", this.secondClick);
                                    var hand = document.getElementById("hand4");
                                    this.lien.style.position = "static";
                                    this.lien.style.left = 0;
                                   this.lien.style.top = 0;
                                    this.lien.addEventListener("click", this.clique);
                                    hand.appendChild(this.lien);

                                  }*/

                                }
                            }//this.ag = 0 / 180
                            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////this.ag 90
          if (this.ag === 90 || this.ag === 270) {
            var okside1 = 0;
            var okside2 = 0;
            for (var i = -1; i < 1; i++) {
              for (var j = 1; j < 3; j++) {
                var pox = document.querySelector(".square[pos-x='"+(posx+i)+"'][pos-y='"+(posy+j)+"']");
                var comp = pox.getAttribute("value");
                var disp = pox.getAttribute("dispo");
                if (this.ag === 90) {
                  if (comp == this.side2 && disp == "libre") {
                    okside1 +=1;
                  }
                }
              else
                if (this.ag === 270) {
                  if (comp == this.side1 && disp == "libre") {
                    okside1 +=1;
                  }
                }
              }//
            }
            for (var i = 1; i < 3; i++) {
              for (var j = 1; j < 3; j++) {
                var pox = document.querySelector(".square[pos-x='"+(posx+i)+"'][pos-y='"+(posy+j)+"']");
                  var comp = pox.getAttribute("value");
                  var disp = pox.getAttribute("dispo");
                  if (this.ag === 90) {
                    if (comp == this.side1 && disp == "libre") {
                      okside2 +=1;
                    }
                  }
                else
                  if (this.ag === 270) {
                    if (comp == this.side2 && disp == "libre") {
                      okside2 +=1;
                    }
                  }
                }//
              }//
              if (okside1 === 4) {                             
                      var occ = 0;
                      var occg = 0;
                      var occd = 0;
                      var okElseOccd = 0;
                      var okElseOccg = 0;
                      var okElseOccdh = 0;
                      var okElseOccgh = 0;
                      for (var a = -5; a < -1; a++) {
                        for (var b = 1; b < 3; b++) {
                          var pos = document.querySelector(".square[pos-x='"+(posx+a)+"'][pos-y='"+(posy+b)+"']");
                          var cmp = pos.getAttribute("dispo");
                          game.dominos.lastRotate = this.ag;
                          if (cmp != "libre") {
                            occ += 1;
                          }
                        }
                      }
                      for (var u = -3; u < -1; u++) {
                        for (var t = 1; t < 5; t++) {
                          var pou = document.querySelector(".square[pos-x='"+(posx+u)+"'][pos-y='"+(posy+t)+"']");
                          var cmpoug = pou.getAttribute("dispo");
                          if (cmpoug != "libre") {
                            occg += 1;
                          }
                        }
                      }
                      for (var u = -3; u < -1; u++) {
                        for (var t = -1; t < 3; t++) {
                          var poud = document.querySelector(".square[pos-x='"+(posx+u)+"'][pos-y='"+(posy+t)+"']");
                          var cmpoud = poud.getAttribute("dispo");
                          if (cmpoud != "libre") {
                            occd += 1;
                          }
                        }
                      }
                      for (var o = -1; o < 1; o++) {// okoccd
                        for (var p = -3; p < 1; p++) {
                          var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                          var cmpElseOccd = poy.getAttribute("dispo");
                          if (cmpElseOccd != "libre") {
                            okElseOccd += 1;
                          }
                        }
                      }
                      for (var o = -1; o < 1; o++) {// ok ooccg
                        for (var p = 3; p < 7; p++) {
                          var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                          var cmpElseOccg = poy.getAttribute("dispo");
                          if (cmpElseOccg != "libre") {
                            okElseOccg += 1;
                          }
                        }
                      }
                      for (var o = -3; o < 1; o++) {// ok oocdh
                        for (var p = -1; p < 1; p++) {
                          var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                          var cmpElseOccdh = poy.getAttribute("dispo");
                          if (cmpElseOccdh != "libre") {
                            okElseOccdh += 1;
                          }
                        }
                      }
                      for (var o = -3; o < 1; o++) {// ok ooccgh
                        for (var p = 3; p < 5; p++) {
                          var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                          var cmpElseOccg = poy.getAttribute("dispo");
                          if (cmpElseOccg != "libre") {
                            okElseOccgh += 1;
                          }
                        }
                      }
                      if (occ === 8) {
                        for (var u = -3; u < -1; u++) {
                          for (var t = 3; t < 5; t++) {
                            var pou = document.querySelector(".square[pos-x='"+(posx+u)+"'][pos-y='"+(posy+t)+"']");
                            pou.removeAttribute("value");
                            pou.setAttribute("value", 28);
                          }
                        }       
                        for (var u = -3; u < -1; u++) {
                          for (var t = -1; t < 1; t++) {
                            var pou = document.querySelector(".square[pos-x='"+(posx+u)+"'][pos-y='"+(posy+t)+"']");
                            pou.removeAttribute("value");
                            pou.setAttribute("value", 28);
                          }
                        }
                      }//if occ 8
                    else
                      if (occg === 8) {
                        for (var g = -3; g < -1; g++) {
                          for (var gh = -1; gh < 1; gh++) {
                            var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                            poug.removeAttribute("value");
                            poug.setAttribute("value", 28);
                          }
                        }
                        for (var g = -5; g < -3; g++) {
                          for (var gh = 1; gh < 3; gh++) {
                            var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                            poug.removeAttribute("value");
                            poug.setAttribute("value", 28);
                          }
                        }
                        for (var g = -1; g < 1; g++) {
                          for (var gh = 3; gh < 5; gh++) {
                            var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                            poug.removeAttribute("value");
                            poug.setAttribute("value", 28);
                          }
                        }
                      }
                    else 
                      if (occd === 8) {
                        for (var g = -3; g < -1; g++) {
                          for (var gh = 3; gh < 5; gh++) {
                            var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                            poug.removeAttribute("value");
                            poug.setAttribute("value", 28);
                          }
                        }
                        for (var g = -5 ; g < -3; g++) {
                          for (var gh = 1; gh < 3; gh++) {
                            var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                            poug.removeAttribute("value");
                            poug.setAttribute("value", 28);
                          }
                        }
                        for (var g = -1 ; g < 1; g++) {
                          for (var gh = -1; gh < 1; gh++) {
                            var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                            poug.removeAttribute("value");
                            poug.setAttribute("value", 28);
                          }
                        }
                      }//occd8
                      if (occ === 8 || occd === 8 || occg === 8) {
                        for (var o = 1; o < 3; o++){
                          for (var p = 3; p < 5; p++) {
                            var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                            if (this.ag === 90) {
                              poy.setAttribute("value", this.side1);
                            }
                          else
                            if (this.ag === 270) {
                              poy.setAttribute("value", this.side2);
                            }
                          }
                        }
                        for (var o = 1; o < 3; o++){
                          for (var p = -1; p < 1; p++) {
                            var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                            if (this.ag === 90) {
                              poy.setAttribute("value", this.side1);
                            }
                          else
                            if (this.ag === 270) {
                              poy.setAttribute("value", this.side2);
                            }
                          }
                        }
                        for (var o = 3; o < 5; o++){
                          for (var p = 1; p < 3; p++) {
                            var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                            if (this.ag === 90) {
                              poy.setAttribute("value", this.side1);
                            }
                          else
                            if (this.ag === 270) {
                              poy.setAttribute("value", this.side2);
                            }
                          }
                        }
                      for (var o = -1; o < 3; o++){
                        for (var p = 1; p < 3; p++) {
                          if (o === -1 || o === 0) {
                            var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                            if (this.ag === 90) {
                              poy.setAttribute("value", this.side2);
                              poy.setAttribute("dispo", "occupée");
                            }
                          else
                            if (this.ag === 270) {
                              poy.setAttribute("value", this.side1);
                              poy.setAttribute("dispo", "occupée");
                            }
                          }
                          if (o === 1 || o === 2) {
                            var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                            if (this.ag === 90) {
                              poy.setAttribute("value", this.side1);
                              poy.setAttribute("dispo", "occupée");
                            }
                          else
                            if (this.ag === 270) {
                              poy.setAttribute("value", this.side2);
                              poy.setAttribute("dispo", "occupée");
                            }
                          }
                        }
                      }
                      game.players.win();
                    }
                else
                  if (okElseOccd === 8) {
                    for (var o = -3; o < -1; o++) {
                      for (var p = -1; p < 0; p++) {
                        var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                        poy.removeAttribute("value");
                        poy.setAttribute("value", 28);
                      }
                    }
                    for (var o = 1; o < 3; o++) {
                      for (var p = -1; p < 1; p++) {
                        var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                        poy.removeAttribute("value");
                        poy.setAttribute("value", 28);
                      }
                    }
                    for (var o = -1; o < 3; o++) {
                      for (var p = 1; p < 3; p++) {
                        if (o === -1 || o === 0) {
                          var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                          if (this.ag === 90) {
                            poy.setAttribute("value", this.side2);
                            poy.setAttribute("dispo", "occupée");
                          }
                        else
                          if (this.ag === 270) {
                            poy.setAttribute("value", this.side1);
                            poy.setAttribute("dispo", "occupée");
                          }
                        }
                        if (o === 1 || o === 2) {
                          var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                          if (this.ag === 90) {
                            poy.setAttribute("value", this.side1);
                            poy.setAttribute("dispo", "occupée");
                          }
                         else
                          if (this.ag === 270) {
                            poy.setAttribute("value", this.side2);
                            poy.setAttribute("dispo", "occupée");
                          }
                        }
                      }
                    }
                    for (var o = 3; o < 5; o++) {
                      for (var p = 1; p < 3; p++) {
                        var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                        if (this.ag === 90) {
                          poy.setAttribute("value", this.side1);
                        }
                      else
                        if (this.ag === 270) {
                          poy.setAttribute("value", this.side2);
                        }
                      }
                    }
                    for (var o = 1; o < 3; o++) {
                      for (var p = 3; p < 5; p++) {
                        var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                        if (this.ag === 90) {
                          poy.setAttribute("value", this.side1);
                        }
                      else
                        if (this.ag === 270) {
                          poy.setAttribute("value", this.side2);
                        }
                      }
                    }
                    game.players.win(); 
                  }//okElseOccd
                else
                   if (okElseOccg === 8) {
                    for (var o = -3; o < -1; o++) {
                      for (var p = 3; p < 5; p++) {
                        var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                        poy.removeAttribute("value");
                        poy.setAttribute("value", 28);
                      }
                    }
                    for (var o = 1; o < 3; o++) {
                      for (var p = 3; p < 5; p++) {
                        var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                        poy.removeAttribute("value");
                        poy.setAttribute("value", 28);
                      }
                    }
                    for (var o = -1; o < 3; o++) {
                      for (var p = 1; p < 3; p++) {
                        if (o === -1 || o === 0) {
                          var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                          if (this.ag === 90) {
                            poy.setAttribute("value", this.side2);
                            poy.setAttribute("dispo", "occupée");
                          }
                        else
                          if (this.ag === 270) {
                            poy.setAttribute("value", this.side1);
                            poy.setAttribute("dispo", "occupée");
                          }
                        }
                        if (o === 1 || o === 2) {
                          var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                          if (this.ag === 90) {
                            poy.setAttribute("value", this.side1);
                            poy.setAttribute("dispo", "occupée");
                          }
                        else
                          if (this.ag === 270) {
                            poy.setAttribute("value", this.side2);
                            poy.setAttribute("dispo", "occupée");
                          }
                        }
                      }
                    }
                    for (var o = 3; o < 5; o++) {
                      for (var p = 1; p < 3; p++) {
                        var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                        if (this.ag === 90) {
                          poy.setAttribute("value", this.side1);
                        }
                      else
                        if (this.ag === 270) {
                          poy.setAttribute("value", this.side2);
                        }
                      }
                    }
                    for (var o = 1; o < 3; o++) {
                      for (var p = -1; p < 1; p++) {
                        var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                        if (this.ag === 90) {
                          poy.setAttribute("value", this.side1);
                        }
                      else
                        if (this.ag === 270) {
                          poy.setAttribute("value", this.side2);
                        }
                      }
                    }
                    game.players.win();
                  }//okElseOccg
                else
                  if (okElseOccdh === 8) {
                    for (var o = -1; o < 1; o++) {
                      for (var p = -3; p < -1; p++) {
                        var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                        poy.removeAttribute("value");
                        poy.setAttribute("value", 28);
                      }
                    }
                    for (var o = -3; o < -1; o++) {
                      for (var p = 1; p < 3; p++) {
                        var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                        poy.removeAttribute("value");
                        poy.setAttribute("value", 28);
                      }
                    }
                    for (var o = 1; o < 3; o++) {
                      for (var p = -1; p < 1; p++) {
                        var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                        poy.removeAttribute("value");
                        poy.setAttribute("value", 28);
                      }
                    }
                    for (var o = -1; o < 3; o++) {
                      for (var p = 1; p < 3; p++) {
                        if (o === -1 || o === 0) {
                          var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                          if (this.ag === 90) {
                            poy.setAttribute("value", this.side2);
                            poy.setAttribute("dispo", "occupée");
                          }
                        else
                          if (this.ag === 270) {
                            poy.setAttribute("value", this.side1);
                            poy.setAttribute("dispo", "occupée");
                          }
                        }
                        if (o === 1 || o === 2) {
                          var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                          if (this.ag === 90) {
                            poy.setAttribute("value", this.side1);
                            poy.setAttribute("dispo", "occupée");
                          }
                        else
                          if (this.ag === 270) {
                            poy.setAttribute("value", this.side2);
                            poy.setAttribute("dispo", "occupée");
                          }
                        }
                      }
                    }
                    for (var o = 3; o < 5; o++) {
                      for (var p = 1; p < 3; p++) {
                        var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                        if (this.ag === 90) {
                          poy.setAttribute("value", this.side1);
                        }
                      else
                        if (this.ag === 270) {
                          poy.setAttribute("value", this.side2);
                        }
                      }
                    }
                    for (var o = 1; o < 3; o++) {
                      for (var p = 3; p < 5; p++) {
                        var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                        if (this.ag === 90) {
                          poy.setAttribute("value", this.side1);
                        }
                      else
                        if (this.ag === 270) {
                          poy.setAttribute("value", this.side2);
                        }
                      }
                    }
                    game.players.win();
                  }//okElseOccdh
                else
                  if (okElseOccgh === 8) {
                    for (var o = -3; o < 1; o++) {
                      for (var p = 5; p < 7; p++) {
                        var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                        poy.setAttribute("value", 28);
                      }
                    }
                    for (var o = -3; o < -1; o++) {
                      for (var p = 1; p < 3; p++) {
                        var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                        poy.setAttribute("value", 28);
                      }
                    }
                    for (var o = 1; o < 3; o++) {
                      for (var p = 3; p < 5; p++) {
                        var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                        poy.setAttribute("value", 28);
                      }
                    }
                    for (var o = -1; o < 3; o++) {
                      for (var p = 1; p < 3; p++) {
                        if (o === -1 || o === 0) {
                          var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                          if (this.ag === 90) {
                            poy.setAttribute("value", this.side2);
                            poy.setAttribute("dispo", "occupée");
                          }
                        else
                          if (this.ag === 270) {
                            poy.setAttribute("value", this.side1);
                            poy.setAttribute("dispo", "occupée");
                          }
                        }
                        if (o === 1 || o === 2) {
                          var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                          if (this.ag === 90) {
                            poy.setAttribute("value", this.side1);
                            poy.setAttribute("dispo", "occupée");
                          }
                        else
                          if (this.ag === 270) {
                            poy.setAttribute("value", this.side2);
                            poy.setAttribute("dispo", "occupée");
                          }
                        }
                      }
                    }
                    for (var o = 3; o < 5; o++) {
                      for (var p = 1; p < 3; p++) {
                        var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                        if (this.ag === 90) {
                          poy.setAttribute("value", this.side1);
                        }
                      else
                        if (this.ag === 270) {
                          poy.setAttribute("value", this.side2);
                        }
                      }
                    }
                    for (var o = 1; o < 3; o++) {
                      for (var p = -1; p < 1; p++) {
                        var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                        if (this.ag === 90) {
                          poy.setAttribute("value", this.side1);
                        }
                      else
                        if (this.ag === 270) {
                          poy.setAttribute("value", this.side2);
                        }
                      }
                    }
                    game.players.win();
              }//okElseOccgh
            else {
              this.retour();
                /*if (game.players.tour === 1 ) {
                  this.par.removeEventListener("click", this.secondClick);
                  var hand = document.getElementById("hand1");
                  this.lien.style.position = "static";
                  this.lien.style.left = 0;
                  this.lien.style.top = 0;
                  this.lien.addEventListener("click", this.clique);
                  hand.appendChild(this.lien);
                }
              else
                if (game.players.tour === 2 ) {
                  this.par.removeEventListener("click", this.secondClick);
                  var hand = document.getElementById("hand2");
                  this.lien.style.position = "static";
                  this.lien.style.left = 0;
                  this.lien.style.top = 0;
                  this.lien.addEventListener("click", this.clique);
                  hand.appendChild(this.lien);
                }
              else
                if (game.players.tour === 3 ) {
                  this.par.removeEventListener("click", this.secondClick);
                  var hand = document.getElementById("hand3");
                  this.lien.style.position = "static";
                  this.lien.style.left = 0;
                  this.lien.style.top = 0;
                  this.lien.addEventListener("click", this.clique);
                  hand.appendChild(this.lien);
                }
              else
                if (game.players.tour === 4 ) {
                  this.par.removeEventListener("click", this.secondClick);
                  var hand = document.getElementById("hand4");
                  this.lien.style.position = "static";
                  this.lien.style.left = 0;
                  this.lien.style.top = 0;
                  this.lien.addEventListener("click", this.clique);
                  hand.appendChild(this.lien);
                }*/
              }// okElseOccgb/okElseOccdb
            } // okside1 = 4
//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////side 2 ag 90/180
//////////////////////////////////////////////////////////////////////////////////
            if (okside2 === 4) {
              this.par.removeEventListener("click", this.secondClick);
              var occ = 0;
              var occg = 0;
              var occd = 0;
              var okElseOccd = 0;
              var okElseOccg = 0;
              var okElseOccdh = 0;
              var okElseOccgh = 0;
              for (var a = 3; a < 7; a++) {
                for (var b = 1; b < 3; b++) {
                  var pos = document.querySelector(".square[pos-x='"+(posx+a)+"'][pos-y='"+(posy+b)+"']");
                  var cmp = pos.getAttribute("dispo");
                  game.dominos.lastRotate = this.ag;
                  if (cmp != "libre") {
                    occ += 1;
                  }
                }
              }
              for (var u = 3; u < 5; u++) {
                for (var t = 1; t < 5; t++) {
                  var pou = document.querySelector(".square[pos-x='"+(posx+u)+"'][pos-y='"+(posy+t)+"']");
                  var cmpoug = pou.getAttribute("dispo");
                  if (cmpoug != "libre") {
                    occd += 1;
                  }
                }
              }
              for (var u = 3; u < 5; u++) {
                for (var t = -1; t < 3; t++) {
                  var poud = document.querySelector(".square[pos-x='"+(posx+u)+"'][pos-y='"+(posy+t)+"']");
                  var cmpoud = poud.getAttribute("dispo");
                  if (cmpoud != "libre") {
                    occg += 1;
                  }
                }
              }
              for (var o = 1; o < 3; o++) {// okoccd
                for (var p = 3; p < 7; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  var cmpElseOccd = poy.getAttribute("dispo");
                  if (cmpElseOccd != "libre") {
                    okElseOccd += 1;
                  }
                }
              }
              for (var o = 1; o < 3; o++) {// ok ooccg
                for (var p = -3; p < 1; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  var cmpElseOccg = poy.getAttribute("dispo");
                  if (cmpElseOccg != "libre") {
                    okElseOccg += 1;
                  }
                }
              }
              for (var o = 1; o < 5; o++) {// ok oocdh
                for (var p = 3; p < 5; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  var cmpElseOccdh = poy.getAttribute("dispo");
                  if (cmpElseOccdh != "libre") {
                    okElseOccdh += 1;
                  }
                }
              }
              for (var o = 1; o < 5; o++) {// ok ooccgh
                for (var p = -1; p < 1; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  var cmpElseOccg = poy.getAttribute("dispo");
                  if (cmpElseOccg != "libre") {
                    okElseOccgh += 1;
                  }
                }
              }
              if (occ === 8) {
                for (var u = 3; u < 5; u++) {
                  for (var t = -1; t < 1; t++) {
                    var pou = document.querySelector(".square[pos-x='"+(posx+u)+"'][pos-y='"+(posy+t)+"']");
                    pou.removeAttribute("value");
                    pou.setAttribute("value", 28);
                  }
                }
                for (var u = 3; u < 5; u++) {
                  for (var t = 3; t < 5; t++) {
                    var pou = document.querySelector(".square[pos-x='"+(posx+u)+"'][pos-y='"+(posy+t)+"']");
                    pou.removeAttribute("value");
                    pou.setAttribute("value", 28);
                  }
                }
              }//if occ 8
            else
              if (occg === 8) {
                for (var g = 1; g < 3; g++) {
                  for (var gh = -1; gh < 1; gh++) {
                    var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                    poug.removeAttribute("value");
                    poug.setAttribute("value", 28);
                  }
                }
                for (var g = 3; g < 5; g++) {
                  for (var gh = 3; gh < 5; gh++) {
                    var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                    poug.removeAttribute("value");
                    poug.setAttribute("value", 28);
                  }
                }
                for (var g = 5; g < 7; g++) {
                  for (var gh = 1; gh < 3; gh++) {
                    var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                    poug.removeAttribute("value");
                    poug.setAttribute("value", 28);
                  }
                }
              }//occg8
            else  
              if (occd === 8) {
                for (var g = 1; g < 3; g++) {
                  for (var gh = 3; gh < 5; gh++) {
                    var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                    poug.removeAttribute("value");
                    poug.setAttribute("value", 28);
                  }
                }
                for (var g = 3 ; g < 5; g++) {
                  for (var gh = -1; gh < 1; gh++) {
                    var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                    poug.removeAttribute("value");
                    poug.setAttribute("value", 28);
                  }
                }
                for (var g = 5 ; g < 7; g++) {
                  for (var gh = 1; gh < 3; gh++) {
                    var poug = document.querySelector(".square[pos-x='"+(posx+g)+"'][pos-y='"+(posy+gh)+"']");
                    poug.removeAttribute("value");
                    poug.setAttribute("value", 28);
                  }
                }
              }//occd8
              if (occ === 8 || occd === 8 || occg === 8) {
                for (var o = -1; o < 1; o++){
                  for (var p = -1; p < 1; p++) {
                    var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                    if (this.ag === 90) {
                      poy.setAttribute("value", this.side2);
                    }
                  else
                    if (this.ag === 270) {
                      poy.setAttribute("value", this.side1);
                    }
                  }
                }
                for (var o = -1; o < 1; o++){
                  for (var p = 3; p < 5; p++) {
                    var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                    if (this.ag === 90) {
                      poy.setAttribute("value", this.side2);
                    }
                  else
                    if (this.ag === 270) {
                      poy.setAttribute("value", this.side1);
                    }
                  }
                }
                for (var o = -3; o < -1; o++){
                  for (var p = 1; p < 3; p++) {
                    var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                    if (this.ag === 90) {
                      poy.setAttribute("value", this.side2);
                    }
                  else
                    if (this.ag === 270) {
                      poy.setAttribute("value", this.side1);
                    }
                  }
                }
                for (var o = -1; o < 3; o++){
                  for (var p = 1; p < 3; p++) {
                    if (o === -1 || o === 0) {
                      var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                      if (this.ag === 90) {
                        poy.setAttribute("value", this.side2);
                        poy.setAttribute("dispo", "occupée");
                      }
                    else
                      if (this.ag === 270) {
                        poy.setAttribute("value", this.side1);
                      poy.setAttribute("dispo", "occupée");
                    }
                  }
                  if (o === 1 || o === 2) {
                    var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                    if (this.ag === 90) {
                      poy.setAttribute("value", this.side1);
                      poy.setAttribute("dispo", "occupée");
                    }
                  else
                    if (this.ag === 270) {
                      poy.setAttribute("value", this.side2);
                      poy.setAttribute("dispo", "occupée");
                    }
                  }
                }
              }
              game.players.win();
            }// occ, occd , occg = 8
          else  
            if (okElseOccd === 8) {
              for (var o = -1; o < 1; o++) {
                for (var p = 3; p < 5; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  poy.removeAttribute("value");
                  poy.setAttribute("value", 28);
                }
              }
              for (var o = 3; o < 5; o++) {
                for (var p = 3; p < 5; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  poy.removeAttribute("value");
                  poy.setAttribute("value", 28);
                }
              }
              for (var o = -1; o < 3; o++) {
                for (var p = 1; p < 3; p++) {
                  if (o === -1 || o === 0) {
                    var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                    if (this.ag === 90) {
                      poy.setAttribute("value", this.side2);
                      poy.setAttribute("dispo", "occupée");
                    }
                  else
                    if (this.ag === 270) {
                      poy.setAttribute("value", this.side1);
                      poy.setAttribute("dispo", "occupée");
                    }
                  }
                  if (o === 1 || o === 2) {
                    var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                    if (this.ag === 90) {
                      poy.setAttribute("value", this.side1);
                      poy.setAttribute("dispo", "occupée");
                    }
                  else
                    if (this.ag === 270) {
                      poy.setAttribute("value", this.side2);
                      poy.setAttribute("dispo", "occupée");
                    }
                  }
                }
              }
              for (var o = -1; o < 0; o++) {
                for (var p = -1; p < 0; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  if (this.ag === 90) {
                    poy.setAttribute("value", this.side2);
                  }
                else
                  if (this.ag === 270) {
                    poy.setAttribute("value", this.side1);
                  }
                }
              }
              for (var o = -3; o < -1; o++) {
                for (var p = 1; p < 3; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  if (this.ag === 90) {
                    poy.setAttribute("value", this.side2);
                  }
                else
                  if (this.ag === 270) {
                    poy.setAttribute("value", this.side1);
                  }
                }
              }
              game.players.win(); 
            }//okElseOccd
          else
            if (okElseOccg === 8) {
              for (var o = -1; o < 1; o++) {
                for (var p = -1; p < 1; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  poy.removeAttribute("value");
                  poy.setAttribute("value", 28);
                }
              }
              for (var o = 3; o < 5; o++) {
                for (var p = -1; p < 1; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  poy.removeAttribute("value");
                  poy.setAttribute("value", 28);
                }
              }
              for (var o = -1; o < 3; o++) {
                for (var p = 1; p < 3; p++) {
                  if (o === -1 || o === 0) {
                    var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                    if (this.ag === 90) {
                      poy.setAttribute("value", this.side2);
                      poy.setAttribute("dispo", "occupée");
                    }
                  else
                    if (this.ag === 270) {
                      poy.setAttribute("value", this.side1);
                      poy.setAttribute("dispo", "occupée");
                    }
                  }
                  if (o === 1 || o === 2) {
                    var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                    if (this.ag === 90) {
                       poy.setAttribute("value", this.side1);
                      poy.setAttribute("dispo", "occupée");
                    }
                  else
                    if (this.ag === 270) {
                      poy.setAttribute("value", this.side2);
                      poy.setAttribute("dispo", "occupée");
                    }
                  }
                }
              }
              for (var o = -3; o < -1; o++) {
                for (var p = 1; p < 3; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  if (this.ag === 90) {
                    poy.setAttribute("value", this.side2);
                  }
                else
                  if (this.ag === 270) {
                    poy.setAttribute("value", this.side1);
                  }
                }
              }
              for (var o = -1; o < 1; o++) {
                for (var p = 3; p < 5; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  if (this.ag === 90) {
                    poy.setAttribute("value", this.side2);
                  }
                 else
                  if (this.ag === 270) {
                    poy.setAttribute("value", this.side1);
                  }
                }
              }
              game.players.win();
            }//okElseOccg
          else
            if (okElseOccdh === 8) {
              for (var o = 3; o < 5; o++) {
                for (var p = 1; p < 3; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  poy.removeAttribute("value");
                  poy.setAttribute("value", 28);
                }
              }
              for (var o = 1; o < 3; o++) {
                for (var p = 5; p < 7; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  poy.removeAttribute("value");
                  poy.setAttribute("value", 28);
                }
              }
              for (var o = -1; o < 1; o++) {
                for (var p = 3; p < 5; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  poy.removeAttribute("value");
                  poy.setAttribute("value", 28);
                }
              }
              for (var o = -1; o < 3; o++) {
                for (var p = 1; p < 3; p++) {
                  if (o === -1 || o === 0) {
                    var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                    if (this.ag === 90) {
                      poy.setAttribute("value", this.side2);
                      poy.setAttribute("dispo", "occupée");
                    }
                  else
                    if (this.ag === 270) {
                      poy.setAttribute("value", this.side1);
                      poy.setAttribute("dispo", "occupée");
                    }
                  }
                   if (o === 1 || o === 2) {
                    var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                    if (this.ag === 90) {
                      poy.setAttribute("value", this.side1);
                      poy.setAttribute("dispo", "occupée");
                    }
                  else
                    if (this.ag === 270) {
                      poy.setAttribute("value", this.side2);
                      poy.setAttribute("dispo", "occupée");
                    }
                   }
                 }
               }
              for (var o = -1; o < 1; o++) {
                for (var p = -1; p < 1; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  if (this.ag === 90) {
                    poy.setAttribute("value", this.side2);
                  }
                else
                  if (this.ag === 270) {
                    poy.setAttribute("value", this.side1);
                  }
                }
              }
              for (var o = -3; o < -1; o++) {
                for (var p = 1; p < 3; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  if (this.ag === 90) {
                    poy.setAttribute("value", this.side2);
                  }
                else
                  if (this.ag === 270) {
                    poy.setAttribute("value", this.side1);
                  }
                }
              }
              game.players.win();
            }//okElseOccdh 
          else               
            if (okElseOccgh === 8) {
              for (var o = 3; o < 5; o++) {
                for (var p = 1; p < 3; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  poy.removeAttribute("value");
                  poy.setAttribute("value", 28);
                }
              }
              for (var o = 1; o < 3; o++) {
                for (var p = -3; p < -1; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  poy.removeAttribute("value");
                  poy.setAttribute("value", 28);
                }
              }
              for (var o = -1; o < 1; o++) {
                for (var p = -1; p < 1; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  poy.removeAttribute("value");
                  poy.setAttribute("value", 28);
                }
              }
              for (var o = -1; o < 3; o++) {
                for (var p = 1; p < 3; p++) {
                  if (o === -1 || o === 0) {
                    var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                    if (this.ag === 90) {
                      poy.setAttribute("value", this.side2);
                      poy.setAttribute("dispo", "occupée");
                    }
                  else
                    if (this.ag === 270) {
                      poy.setAttribute("value", this.side1);
                      poy.setAttribute("dispo", "occupée");
                    }
                  }
                  if (o === 1 || o === 2) {
                    var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                    if (this.ag === 90) {
                      poy.setAttribute("value", this.side1);
                      poy.setAttribute("dispo", "occupée");
                    }
                  else
                    if (this.ag === 270) {
                      poy.setAttribute("value", this.side2);
                      poy.setAttribute("dispo", "occupée");
                    }
                  }
                }
              }
              for (var o = -3; o < -1; o++) {
                for (var p = 1; p < 3; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  if (this.ag === 90) {
                    poy.setAttribute("value", this.side2);
                  }
                else
                  if (this.ag === 270) {
                    poy.setAttribute("value", this.side1);
                  }
                }
              }
              for (var o = -1; o < 1; o++) {
                for (var p = 3; p < 5; p++) {
                  var poy = document.querySelector(".square[pos-x='"+(posx+o)+"'][pos-y='"+(posy+p)+"']")
                  if (this.ag === 90) {
                    poy.setAttribute("value", this.side2);
                  }
                else
                  if (this.ag === 270) {
                    poy.setAttribute("value", this.side1);
                  }
                }
              }
              game.players.win();
            }//okElseOccgh                                        
            else {
              this.retour();
                /*if (game.players.tour === 1 ) {
                  this.par.removeEventListener("click", this.secondClick);
                  var hand = document.getElementById("hand1");
                  this.lien.style.position = "static";
                  this.lien.style.left = 0;
                  this.lien.style.top = 0;
                  this.lien.addEventListener("click", this.clique);
                  hand.appendChild(this.lien);
                }
              else
                if (game.players.tour === 2 ) {
                  this.par.removeEventListener("click", this.secondClick);
                  var hand = document.getElementById("hand2");
                  this.lien.style.position = "static";
                  this.lien.style.left = 0;
                  this.lien.style.top = 0;
                  this.lien.addEventListener("click", this.clique);
                  hand.appendChild(this.lien);
                }
              else
                if (game.players.tour === 3 ) {
                  this.par.removeEventListener("click", this.secondClick);
                  var hand = document.getElementById("hand3");
                  this.lien.style.position = "static";
                  this.lien.style.left = 0;
                  this.lien.style.top = 0;
                  this.lien.addEventListener("click", this.clique);
                  hand.appendChild(this.lien);
                }
              else
                if (game.players.tour === 4 ) {
                  this.par.removeEventListener("click", this.secondClick);
                  var hand = document.getElementById("hand4");
                  this.lien.style.position = "static";
                  this.lien.style.left = 0;
                  this.lien.style.top = 0;
                  this.lien.addEventListener("click", this.clique);
                  hand.appendChild(this.lien);
                }*/
              }// okElseOccgb/okElseOccdb
            } // okside2 = 4
          else
            if (okside1 != 4 && okside2 !=4) {
              this.retour();
              /*if (game.players.tour === 1 ) {
                this.par.removeEventListener("click", this.secondClick);
                var hand = document.getElementById("hand1");
                this.lien.style.position = "static";
                this.lien.style.left = 0;
                this.lien.style.top = 0;
                this.lien.addEventListener("click", this.clique);
                hand.appendChild(this.lien);
              }
            else
              if (game.players.tour === 2 ) {
                this.par.removeEventListener("click", this.secondClick);
                var hand = document.getElementById("hand2");
                this.lien.style.position = "static";
                this.lien.style.left = 0;
                this.lien.style.top = 0;
                this.lien.addEventListener("click", this.clique);
                hand.appendChild(this.lien);
              }
            else
              if (game.players.tour === 3 ) {
                this.par.removeEventListener("click", this.secondClick);
                var hand = document.getElementById("hand3");
                this.lien.style.position = "static";
                this.lien.style.left = 0;
                this.lien.style.top = 0;
                this.lien.addEventListener("click", this.clique);
                hand.appendChild(this.lien);
              }
            else
              if (game.players.tour === 4 ) {
                this.par.removeEventListener("click", this.secondClick);
                var hand = document.getElementById("hand4");
                this.lien.style.position = "static";
                this.lien.style.left = 0;
                this.lien.style.top = 0;
                this.lien.addEventListener("click", this.clique);
                hand.appendChild(this.lien);
              }*/
            }//okside1 && okside 2 != 4
          }//this.ag = 90/270
        }// Else if game tour != 0
      }
    }
          

    this.maousemauve = (event) => {           
      if (this.c === 1) {
        this.lien.style.left = event.clientX-10+'px';    
        this.lien.style.top = event.clientY-20+'px';
      }
    } 


    this.rotate = (event) => {        
      if (this.c === 1) {     
        this.ag += 90;
        this.lien.style.transform = 'rotate('+this.ag+'deg)';
        if (this.ag === 360) {
          this.ag = 0;
        }
      }
    }

    this.retour = () => {
      var main = "hand"+game.players.tour;
        this.par.removeEventListener("click", this.secondClick);
        var hand = document.getElementById(main);
        this.lien.style.position = "static";
        this.lien.style.left = 0;
        this.lien.style.top = 0;
        this.lien.style.transform = 'rotate('+0+'deg)';
        this.ag = 0;
        this.lien.addEventListener("click", this.clique);
        hand.appendChild(this.lien);
    }

    this.lien.onclick = this.clique;
    game.dominos.pioche.push(this.lien);            
  }
}


game.dominos.generateDominos = function() {
  var d0 =   new Domino("d0", 0, 0);
  var d1 =   new Domino("d1", 0, 1);
  var d2 =   new Domino("d2", 0, 2);
  var d3 =   new Domino("d3", 0, 3);
  var d4 =   new Domino("d4", 0, 4);
  var d5 =   new Domino("d5", 0, 5);
  var d6 =   new Domino("d6", 0, 6);
  var d7 =   new Domino("d7", 1, 1);
  var d8 =   new Domino("d8", 1, 2);
  var d9 =   new Domino("d9", 1, 3);
  var d10 =   new Domino("d10", 1, 4);
  var d11 =   new Domino("d11", 1, 5);
  var d12 =   new Domino("d12", 1, 6);
  var d13 =   new Domino("d13", 2, 2);
  var d14 =   new Domino("d14", 2, 3);
  var d15 =   new Domino("d15", 2, 4);
  var d16 =   new Domino("d16", 2, 5);
  var d17 =   new Domino("d17", 2, 6);
  var d18 =   new Domino("d18", 3, 3);
  var d19 =   new Domino("d19", 3, 4);
  var d20 =   new Domino("d20", 3, 5);
  var d21 =   new Domino("d21", 3, 6);
  var d22 =   new Domino("d22", 4, 4);
  var d23 =   new Domino("d23", 4, 5);
  var d24 =   new Domino("d24", 4, 6);
  var d25 =   new Domino("d25", 5, 5);
  var d26 =   new Domino("d26", 5, 6);
  var d27 =   new Domino("d27", 6, 6);
  var d28 =   new Domino("d28", -1, -1);
}


game.dominos.shuffle = function(array) {
  let len = array.length - 1;
  let dominos = array.slice(0);
  for  ( var i = len; i >= 0 ; i--){
    var j = Math.floor(Math.random() * (dominos.length - 1));
    temp = dominos.splice(j, 1);
    array[i] = temp[0]; 
  }
}


game.dominos.setPioche = function(array) {
  let len = array.length-1 ;
  for (var i = 0; i <= len; i++) {
    par = document.getElementById('pioche'),
    son = array[i],
    old = par.childNodes[i];
    par.replaceChild(son, old);
  }
}


game.dominos.hands = function() {
  var nb = game.players.board.length;
    if (nb === 2) {
      for (var i = 0; i < 7; i++) {
        for (var j = 1; j <= nb; j++) {
          let dom = document.getElementById('pioche').childNodes[1];
          document.getElementById('hand'+j).appendChild(dom);
        }
      }
    }
  else {
    for (var i = 0; i < 6; i++) {
        for (var j = 1; j <= nb; j++) {
          let dom = document.getElementById('pioche').childNodes[1];
          document.getElementById('hand'+j).appendChild(dom);
        }
      }
    }
  /*if (game.players.board.length === 2) {
    for (var i = 0; i < 7; i++) {
      let dom1 = document.getElementById('pioche').childNodes[1];
      let dom2 = document.getElementById('pioche').childNodes[2];
      document.getElementById('hand1').appendChild(dom1);
      document.getElementById('hand2').appendChild(dom2);
    }
  }
  else 
    if (game.players.board.length ===3) {
      for (var i = 0; i < 6; i++) {
        let dom1 = document.getElementById('pioche').childNodes[1];
        let dom2 = document.getElementById('pioche').childNodes[2];
        let dom3 = document.getElementById('pioche').childNodes[3];
        document.getElementById('hand1').appendChild(dom1);
        document.getElementById('hand2').appendChild(dom2);
        document.getElementById('hand3').appendChild(dom3);
      }
    }
  else {
    for (var i = 0; i < 6; i++) {
      let dom1 = document.getElementById('pioche').childNodes[1];
      let dom2 = document.getElementById('pioche').childNodes[2];
      let dom3 = document.getElementById('pioche').childNodes[3];
      let dom4 = document.getElementById('pioche').childNodes[4];
      document.getElementById('hand1').appendChild(dom1);
      document.getElementById('hand2').appendChild(dom2);
      document.getElementById('hand3').appendChild(dom3);
      document.getElementById('hand4').appendChild(dom4);
    }
  }*/
}


