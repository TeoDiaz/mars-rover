
var rover = {
  direction: "N",
  y: 1,
  x: 0,
  travelLog: []
};

var rover2 = {
  direction: "N",
  y: 9, 
  x: 9,
  travelLog: []
};

var choosenRover = "select";
var choosenRoverHtml = "select";
var onHab = false;

document.getElementById("seleRover1").onclick = function() {clickBoton1(rover)};
document.getElementById("seleRover2").onclick = function() {clickBoton2(rover2)};
document.getElementById("forward").onclick = function() {moveForward(choosenRover)};
document.getElementById("backward").onclick = function() {moveBackward(choosenRover)};
document.getElementById("left").onclick = function() {turnLeft(choosenRover)};
document.getElementById("right").onclick = function() {turnRight(choosenRover)};


alert("Tienes que volver a casa! Usa las flechas para poder avanzar o retroceder. Las flechas laterales cambian la direccion del rover, buen viaje!");
console.log("Tu Rover esta mirando hacia el" + " " + rover.direction + " " + "pero si quieres coger el otro, que sepas que esta mirando al" + " " + rover2.direction);
console.log("Tu Rover esta en la casilla" + " " + rover.x + " " + rover.y + " " + "el otro, no tengo ni idea...");
console.log("Corre, te estas quedando sin oxigeno y la cena se enfrian en el HAB");


var superficie =[
 [null,null,null,null,null,"O",null,null,null,"O"],
 [null,null,null,null,null,null,null,null,null,null],
 [null,"O",null,null,null,null,null,null,null,null],
 [null,null,null,null,null,null,null,null,null,null],
 [null,null,null,null,"HAB",null,null,null,null,null],
 [null,null,"O",null,null,null,null,null,null,null],
 [null,null,null,null,null,null,null,"O",null,null],
 ["O",null,null,null,null,null,null,null,null,null],
 [null,null,null,null,"O",null,null,null,null,null],
 [null,null,null,null,null,null,null,null,null,null]
];
console.log(superficie);

superficie[rover.y][rover.x] = "R";
superficie[rover2.y][rover2.x] = "R2";

function moveForward(choosenRover){
  if(choosenRover == "select"){
    alert("Selecciona un Rover!");
  }else if(choosenRover != "select"){
    console.log("Avanzas!");
    if(onHab){
      superficie[choosenRover.y][choosenRover.x] = "HAB";
      onHab = false;
    }else{
      superficie[choosenRover.y][choosenRover.x] = null;
    }
    switch (choosenRover.direction){
      case "N":
        if(choosenRover.y == 0){
          console.log("Cuidado, te sales del planeta!");
          alert("Cuidado, te sales del planeta");
        }else{
          var nextPosition = superficie[choosenRover.y - 1][choosenRover.x];
          if(nextPosition == "O"){
            console.log("Cuidado! Un obstaculo");
            alert("Cuidado, que te vas a reventar");
          }else if((nextPosition == "R2") || (nextPosition == "R")){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante");
          }else{
            choosenRover.y -= 1;
            var pos = choosenRover.y * 50 + 25;
            choosenRoverHtml.style.top = pos+"px";
            if(nextPosition == "HAB"){
            onHab = true;
            console.log("Has llegado al HAB! Estas a salvo!");
            alert("AIREEEE FRESCO!");
            }
          }
        }
      break; 
      
      case "S":
        if(choosenRover.y == 9){
          console.log("Cuidado, te sales del planeta");
          alert("Cuidado, te sales del planeta!");
        }else{
          var nextPosition = superficie[choosenRover.y + 1][choosenRover.x];
          if(nextPosition == "O"){
            console.log("Cuidado! Un obstaculo!!");
            alert("CUIDADOOOOOO");
          }else if((nextPosition == "R2") || (nextPosition == "R")){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante");
          }else{
            choosenRover.y += 1;
            var pos = choosenRover.y * 50 + 25;
            choosenRoverHtml.style.top = pos+"px";
            if(nextPosition == "HAB"){
            onHab = true;
            console.log("Has llegado al HAB! Estas a salvo!");
            alert("Por fin a salvo!");
            }
          }
        }
      break;
      
      case "E":
        if(choosenRover.x == 9){
          console.log("Cuidado, te sales del planeta");
          alert("Cuidado, te sales del planeta!");
        }else{
          var nextPosition = superficie[choosenRover.y][choosenRover.x + 1];
          if(nextPosition == "O"){
            console.log("Cuidado! Un obstaculo");
            alert("¿Pero que haces?");
          }else if((nextPosition == "R2") || (nextPosition == "R")){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante");
          }else{
            choosenRover.x += 1;
            var pos = choosenRover.x * 50 + 25;
            choosenRoverHtml.style.left = pos+"px";
            if(nextPosition == "HAB"){
            onHab = true;
            console.log("Has llegado al HAB! Estas a salvo!");
            alert("ESTAS EN CASA");
            }
          }
        }
      break;
      
      case "W":
        if(choosenRover.x == 0){
          console.log("Cuidado, te sales del planeta!");
          alert("Cuidado, te sales del planeta!");
          }else{
            var nextPosition = superficie[choosenRover.y][choosenRover.x -1];
            if(nextPosition == "O"){
              console.log("Cuidado! Un obstaculo");
              alert("Cuidado, acabas de pinchar con una piedra");
            }else if((nextPosition == "R2") || (nextPosition == "R")){
              console.log("Cuidado, hay otro Rover delante, no lo ves?");
              alert("Cuidado, hay un Rover delante");
            }else{
              choosenRover.x -=1;
              var pos = choosenRover.x * 50 + 25;
              choosenRoverHtml.style.left = pos+"px";
              if(nextPosition == "HAB"){
                onHab = true;
                console.log("Has llegado al HAB! Estas a salvo");
                alert("WELCOME HOME");
              }
            }
          }
        break; 
    }
    if(choosenRover == rover){
      superficie[choosenRover.y][choosenRover.x] = "R";
    }else if(choosenRover == rover2){
      superficie[choosenRover.y][choosenRover.x] = "R2";
    }
    choosenRover.travelLog.push("F");
    console.log(choosenRover);
    console.log(superficie);
  }
}

function moveBackward(choosenRover){
  if(choosenRover == "select"){
    alert("Selecciona un Rover");
  }else if(choosenRover != "select"){ 
    console.log("Hacia atras!");
    if(onHab){
      superficie[choosenRover.y][choosenRover.x] = "HAB";
      onHab = false;
    }else{
      superficie[choosenRover.y][choosenRover.x] = null;
    }
    switch (choosenRover.direction){
      case "N":
        if(choosenRover.y == 9){
          console.log("Cuidado, te sales del planeta!");
          alert("Cuidado, te sales del planeta!");
        }else{
          var nextPosition = superficie[choosenRover.y + 1][choosenRover.x];
          if(nextPosition == "O"){
            console.log("Cuidado! Un obstaculo");
            alert("Cuidado, te has chocado con THE ROCK");
          }else if((nextPosition == "R2") || (nextPosition == "R")){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante");
          }else{
            choosenRover.y += 1;
            var pos = choosenRover.y * 50 + 25;
            choosenRoverHtml.style.top = pos+"px";
            if(nextPosition == "HAB"){
              onHab = true;
              console.log("Has llegado al HAB! Estas a salvo");
              alert("HOGAR, DULCE HOGAR");
            }
          }
        }
      break;

      case "S":
        if(choosenRover.y == 0){
          console.log("Cuidado, te sales del planeta!");
          alert("Cuidado, te sales del planeta!");
        }else{
          var nextPosition = superficie[choosenRover.y - 1][choosenRover.x];
          if(nextPosition == "O"){
            console.log("Cuidado! Un obstaculo");
            alert("Cuidado, que te chocas");
          }else if((nextPosition == "R2") || (nextPosition == "R")){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante");
          }else{
            choosenRover.y -= 1;
            var pos = choosenRover.y * 50 + 25;
            choosenRoverHtml.style.top = pos+"px";
            if(nextPosition == "HAB"){
              onHab = true;
              console.log("Has llegado al HAB! Estas a salvo");
              alert("MATT, ESTAS AHI?");
            }
          }
        }
      break;

      case "E":
        if(choosenRover.x == 0){
          console.log("Cuidado, te sales del planeta!");
          alert("Cuidado, te sales del planeta!");
        }else{
          var nextPosition = superficie[choosenRover.y][choosenRover.x - 1];
          if(nextPosition == "O"){
            console.log("Cuidado! Un obstaculo");
            alert("Cuidado, una pedazo de piedra");
          }else if((nextPosition == "R2") || (nextPosition == "R")){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante");
          }else{
            choosenRover.x -=1;
            var pos = choosenRover.x * 50 + 25;
            choosenRoverHtml.style.left = pos+"px";          
            if(nextPosition == "HAB"){
              onHab = true;
              console.log("Has llegado al HAB! Estas a salvo");
              alert("MAMAAAA ESTOY EN CASA!!");
            }
          }
        }
      break;

      case "W":
        if(choosenRover.x == 9){
          console.log("Cuidado, te sales del planeta");
          alert("Cuidado, te sales del planeta!");
        }else{
          var nextPosition = superficie[choosenRover.y][choosenRover.x + 1];
          if(nextPosition == "O"){
            console.log("Cuidado! Un Obstaculo");
            alert("Cuidado, una Roca");
          }else if((nextPosition == "R2") || (nextPosition == "R")){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante");
          }else{
            choosenRover.x +=1;
            var pos = choosenRover.x * 50 + 25;
            choosenRoverHtml.style.left = pos+"px";
            if(nextPosition == "HAB"){
              onHab = true;
              console.log("Has llegado al HAB! Estas a salvo");  
              alert("QUIERO MI BOCADILLO!!");
            }
          }
        }    
      break;
    }
    if(choosenRover == rover){
      superficie[choosenRover.y][choosenRover.x] = "R";
    }else if(choosenRover == rover2){
      superficie[choosenRover.y][choosenRover.x] = "R2";
    }
    choosenRover.travelLog.push("B");
    console.log(choosenRover);
    console.log(superficie);
  }
}

function turnLeft(choosenRover){
  if(choosenRover == "select"){
    alert("Selecciona un Rover!");
  }else if(choosenRover != "select"){
    console.log("Gira a la izquierda!");
    switch (choosenRover.direction){
      case "N":
        choosenRover.direction = "W";
        choosenRoverHtml.style.webkitTransform = "rotate("+270+"deg)";
      break;

      case "W":
        choosenRover.direction = "S";
        choosenRoverHtml.style.webkitTransform = "rotate("+180+"deg)";
      break;

      case "S":
        choosenRover.direction = "E";
        choosenRoverHtml.style.webkitTransform = "rotate("+90+"deg)";
      break;

      case "E":
        choosenRover.direction = "N";
        choosenRoverHtml.style.webkitTransform = "rotate("+0+"deg)";
      break;      
    }    
    console.log (choosenRover);
  }
}

function turnRight(choosenRover){
  if(choosenRover == "select"){
    alert("Selecciona un Rover!");
  }else if(choosenRover != "select"){
    console.log("Gira a la derecha!");
    switch (choosenRover.direction){
      case "N":
        choosenRover.direction = "E";
        choosenRoverHtml.style.webkitTransform = "rotate("+90+"deg)";
      break;

      case "E":
        choosenRover.direction = "S";
        choosenRoverHtml.style.webkitTransform = "rotate("+180+"deg)";
      break;

      case "S":
        choosenRover.direction = "W";
        choosenRoverHtml.style.webkitTransform = "rotate("+270+"deg)";
      break;

      case "W":
        choosenRover.direction = "N";
        choosenRoverHtml.style.webkitTransform = "rotate("+0+"deg)";
      break;
    }
    console.log(choosenRover);
  }
}

function commands(command){
  for(var i = 0; i<command.length; i++){
    console.log(command[i]);
    switch (command[i]) {
      case "f":
        moveForward(choosenRover);
      break;
      
      case "b":
        moveBackward(choosenRover);
      break;

      case "l":
        turnLeft(choosenRover);
      break;

      case "r":
        turnRight(choosenRover);
      break;

      default:
        console.log("Eso no va a funcionar!");
      break;
    
    }    
  }
}

function clickBoton1(rover){
  choosenRover = rover;
  choosenRoverHtml = document.getElementById("rover");
  alert("Has seleccionado el Rover 1");
}

function clickBoton2(rover2){
  choosenRover = rover2;
  choosenRoverHtml = document.getElementById("rover2");
  alert("Has seleccionado el Rover 2");
}

