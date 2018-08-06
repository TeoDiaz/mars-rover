
var rover = {
  direction: "N",
  y: 1,
  x: 0,
  travelLog: []
};

var rover2 = {
  direction: "W",
  y: 9, 
  x: 9,
  travelLog: []
};

var roverHtml = document.getElementById("rover");
var rover2Html = document.getElementById("rover2");


var onHab = false;
var botonRover1 = false;
var botonRover2 = false;


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

function moveForward(rover){
  if(botonRover1 == false  && botonRover2 == false){
    alert("Selecciona un Rover!");
  }else if(botonRover1){
    console.log("Avanzas!");
    if(onHab){
      superficie[rover.y][rover.x] = "HAB";
      onHab = false;
    }else{
      superficie[rover.y][rover.x] = null;
    }
    switch (rover.direction){
      case "N":
        if(rover.y == 0){
          console.log("Cuidado, te sales del planeta!");
        }else{
          var nextPosition = superficie[rover.y - 1][rover.x];
          if(nextPosition == "O"){
            console.log("Cuidado! Un obstaculo");
            alert("Cuidado, que te vas a reventar");
          }else if(nextPosition == "R2"){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante");
          }else{
            rover.y -= 1;
            var pos = rover.y * 50 + 25;
            roverHtml.style.top = pos+"px";
            if(nextPosition == "HAB"){
            onHab = true;
            console.log("Has llegado al HAB! Estas a salvo!");
            alert("AIREEEE FRESCO!");
            }
          }
        }
      break;
      
      case "S":
        if(rover.y == 9){
          console.log("Cuidado, te sales del planeta");
        }else{
          var nextPosition = superficie[rover.y + 1][rover.x];
          if(nextPosition == "O"){
            console.log("Cuidado! Un obstaculo!!");
            alert("CUIDADOOOOOO");
          }else if(nextPosition == "R2"){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante");
          }else{
            rover.y += 1;
            var pos = rover.y * 50 + 25;
            roverHtml.style.top = pos+"px";
            if(nextPosition == "HAB"){
            onHab = true;
            console.log("Has llegado al HAB! Estas a salvo!");
            alert("Por fin a salvo!");
            }
          }
        }
      break;
      
      case "E":
        if(rover.x == 9){
          console.log("Cuidado, te sales del planeta");
        }else{
          var nextPosition = superficie[rover.y][rover.x + 1];
          if(nextPosition == "O"){
            console.log("Cuidado! Un obstaculo");
            alert("¿Pero que haces?");
          }else if(nextPosition == "R2"){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante");
          }else{
           rover.x += 1;
            var pos = rover.x * 50 + 25;
            roverHtml.style.left = pos+"px";
            if(nextPosition == "HAB"){
            onHab = true;
            console.log("Has llegado al HAB! Estas a salvo!");
            alert("ESTAS EN CASA");
            }
          }
        }
      break;
      
      case "W":
        if(rover.x == 0){
          console.log("Cuidado, te sales del planeta!");
          }else{
            var nextPosition = superficie[rover.y][rover.x -1];
            if(nextPosition == "O"){
              console.log("Cuidado! Un obstaculo");
              alert("Cuidado, acabas de pinchar con una rueda");
            }else if(nextPosition == "R2"){
              console.log("Cuidado, hay otro Rover delante, no lo ves?");
              alert("Cuidado, hay un Rover delante");
            }else{
              rover.x -=1;
              var pos = rover.x * 50 + 25;
              roverHtml.style.left = pos+"px";
              if(nextPosition == "HAB"){
                onHab = true;
                console.log("Has llegado al HAB! Estas a salvo");
                alert("WELCOME HOME");
              }
            }
          }
        break; 
    }
    superficie[rover.y][rover.x] = "R";
    rover.travelLog.push("F");
    console.log(rover);
    console.log(superficie);
  }
}



function moveBackward(rover){
  if(botonRover1 == false  && botonRover2 == false){
    alert("Selecciona un Rover");
  }else if(botonRover1){ 
    console.log("Hacia atras!");
    if(onHab){
      superficie[rover.y][rover.x] = "HAB";
      onHab = false;
    }else{
      superficie[rover.y][rover.x] = null;
    }
    switch (rover.direction){
      case "N":
        if(rover.y == 9){
          console.log("Cuidado, te sales del planeta!");
        }else{
          var nextPosition = superficie[rover.y + 1][rover.x];
          if(nextPosition == "O"){
            console.log("Cuidado! Un obstaculo");
            alert("Cuidado, te has chocado con THE ROCK");
          }else if(nextPosition == "R2"){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante");
          }else{
            rover.y += 1;
            var pos = rover.y * 50 + 25;
            roverHtml.style.top = pos+"px";
            if(nextPosition == "HAB"){
              onHab = true;
              console.log("Has llegado al HAB! Estas a salvo");
              alert("HOGAR, DULCE HOGAR");
            }
          }
        }
      break;

      case "S":
        if(rover.y == 0){
          console.log("Cuidado, te sales del planeta!");
        }else{
          var nextPosition = superficie[rover.y - 1][rover.x];
          if(nextPosition == "O"){
            console.log("Cuidado! Un obstaculo");
            alert("Cuidado, que te chocas");
          }else if(nextPosition == "R2"){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante");
          }else{
            rover.y -= 1;
            var pos = rover.y * 50 + 25;
            roverHtml.style.top = pos+"px";
            if(nextPosition == "HAB"){
              onHab = true;
              console.log("Has llegado al HAB! Estas a salvo");
              alert("MATT, ESTAS AHI?");
            }
          }
        }
      break;

      case "E":
        if(rover.x == 0){
          console.log("Cuidado, te sales del planeta!");
        }else{
          var nextPosition = superficie[rover.y][rover.x - 1];
          if(nextPosition == "O"){
            console.log("Cuidado! Un obstaculo");
            alert("Cuidado, una pedazo de piedra");
          }else if(nextPosition == "R2"){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante");
          }else{
            rover.x -=1;
            var pos = rover.x * 50 + 25;
            roverHtml.style.left = pos+"px";          
            if(nextPosition == "HAB"){
              onHab = true;
              console.log("Has llegado al HAB! Estas a salvo");
              alert("MAMAAAA ESTOY EN CASA!!");
            }
          }
        }
      break;

      case "W":
        if(rover.x == 9){
          console.log("Cuidado, te sales del planeta");
        }else{
          var nextPosition = superficie[rover.y][rover.x + 1];
          if(nextPosition == "O"){
            console.log("Cuidado! Un Obstaculo");
            alert("Cuidado, una Roca");
          }else if(nextPosition == "R2"){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante");
          }else{
            rover.x +=1;
            var pos = rover.x * 50 + 25;
            roverHtml.style.left = pos+"px";
            if(nextPosition == "HAB"){
              onHab = true;
              console.log("Has llegado al HAB! Estas a salvo");  
              alert("QUIERO MI BOCADILLO!!");
            }
          }
        }    
      break;
    }


  superficie[rover.y][rover.x] = "R";
  rover.travelLog.push("B");
  console.log(rover);
  console.log(superficie);
  }
}



function turnLeft(rover){
  if(botonRover1 == false && botonRover2 == false){
    alert("Selecciona un Rover!");
  }else if(botonRover1){
    console.log("Gira a la izquierda!");
    switch (rover.direction){
      case "N":
        rover.direction = "W";
        roverHtml.style.webkitTransform = "rotate("+270+"deg)";
      break;

      case "W":
        rover.direction = "S";
        roverHtml.style.webkitTransform = "rotate("+180+"deg)";
      break;

      case "S":
        rover.direction = "E";
        roverHtml.style.webkitTransform = "rotate("+90+"deg)";
      break;

      case "E":
        rover.direction = "N";
        roverHtml.style.webkitTransform = "rotate("+0+"deg)";
      break;
    }
    console.log(superficie);
    console.log (rover);
  }
}


function turnRight(rover){
  if(botonRover1 == false && botonRover2 == false){
    alert("Selecciona un Rover!");
  }else if(botonRover1){
    console.log("Gira a la derecha!");
    switch (rover.direction){
      case "N":
        rover.direction = "E";
        roverHtml.style.webkitTransform = "rotate("+90+"deg)";
      break;

      case "E":
        rover.direction = "S";
        roverHtml.style.webkitTransform = "rotate("+180+"deg)";
      break;

      case "S":
        rover.direction = "W";
        roverHtml.style.webkitTransform = "rotate("+270+"deg)";
      break;

      case "W":
        rover.direction = "N";
        roverHtml.style.webkitTransform = "rotate("+0+"deg)";
      break;
    }
    console.log(rover);
  }
}


function commands(command){
  for(var i = 0; i<command.length; i++){
    console.log(command[i]);
    switch (command[i]) {
      case "f":
        moveForward(rover);
      break;
      
      case "b":
        moveBackward(rover);
      break;

      case "l":
        turnLeft(rover);
      break;

      case "r":
        turnRight(rover);
      break;

      default:
        console.log("Eso no va a funcionar!");
      break;
    
    }    
  }
}

function moveForward2(rover2){
  if(botonRover2){
    console.log("Avanzas!");
    if(onHab){
      superficie[rover2.y][rover2.x] = "HAB";
      onHab = false;
    }else{
      superficie[rover2.y][rover2.x] = null;
    }
    switch (rover2.direction)  {
      case "N":
        if(rover2.y == 0){
          console.log("Cuidado, te sales del planeta!");
        }else{
          var nextPosition = superficie[rover2.y - 1][rover2.x];
          if(nextPosition == "O"){
            console.log("Cuidado! Un obstaculo");
            alert("Cuidado, que te vas a reventar");
          }else if(nextPosition == "R"){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante, ¿que no lo ves?");
          }else{
            rover2.y -= 1;
            var pos = rover2.y * 50 + 25;
            rover2Html.style.top = pos+"px";
            if(nextPosition == "HAB"){
              onHab = true;
              console.log("Has llegado al HAB! Estas a salvo!");
              alert("AIREEEE FRESCO!");
            }
          }
        }
      break;
      
      case "S":
        if(rover2.y == 9){
         console.log("Cuidado, te sales del planeta");
        }else{
          var nextPosition = superficie[rover2.y + 1][rover2.x];
          if(nextPosition == "O"){
            console.log("Cuidado! Un obstaculo!!");
            alert("CUIDADOOOOOO");
          }else if(nextPosition == "R"){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante, ¿que no lo ves?");
          }else{
            rover2.y += 1;
            var pos = rover2.y * 50 + 25;
            rover2Html.style.top = pos+"px";
            if(nextPosition == "HAB"){
              onHab = true;
              console.log("Has llegado al HAB! Estas a salvo!");
              alert("Por fin a salvo!");
            }
          }
        }
      break;
      
      case "E":
        if(rover2.x == 9){
          console.log("Cuidado, te sales del planeta");
        }else{
          var nextPosition = superficie[rover2.y][rover2.x + 1];
          if(nextPosition == "O"){
            console.log("Cuidado! Un obstaculo");
            alert("¿Pero que haces?");
          }else if(nextPosition == "R"){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante, ¿que no lo ves?");
          }else{
            rover2.x += 1;
            var pos = rover2.x * 50 + 25;
            rover2Html.style.left = pos+"px";
            if(nextPosition == "HAB"){
              onHab = true;
              console.log("Has llegado al HAB! Estas a salvo!");
              alert("ESTAS EN CASA");
            }
          }
        }
      break;
      
      case "W":
        if(rover2.x == 0){
          console.log("Cuidado, te sales del planeta!");
        }else{
          var nextPosition = superficie[rover2.y][rover2.x -1];
          if(nextPosition == "O"){
            console.log("Cuidado! Un obstaculo");
            alert("Cuidado, acabas de pinchar con una rueda");
          }else if(nextPosition == "R"){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante, ¿que no lo ves?");
          }else{
            rover2.x -=1;
            var pos = rover2.x * 50 + 25;
            rover2Html.style.left = pos+"px";
            if(nextPosition == "HAB"){
              onHab = true;
              console.log("Has llegado al HAB! Estas a salvo");
              alert("WELCOME HOME");
            }
          }
       }
      break; 
    }

    superficie[rover2.y][rover2.x] = "R2";
    rover2.travelLog.push("F");
    console.log(rover2);
    console.log(superficie);
  }
}


function moveBackward2(rover2){
  if(botonRover2){
    console.log("Hacia atras!");
    if(onHab){
      superficie[rover2.y][rover2.x] = "HAB";
      onHab = false;
    }else{
      superficie[rover2.y][rover2.x] = null;
    }
    switch (rover2.direction){
      case "N":
        if(rover2.y == 9){
          console.log("Cuidado, te sales del planeta!");
        }else{
          var nextPosition = superficie[rover2.y + 1][rover2.x];
          if(nextPosition == "O"){
            console.log("Cuidado! Un obstaculo");
            alert("Cuidado, te has chocado con THE ROCK");
          }else if(nextPosition == "R"){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante, ¿que no lo ves?");
          }else{
            rover2.y += 1;
            var pos = rover2.y * 50 + 25;
            rover2Html.style.top = pos+"px";
            if(nextPosition == "HAB"){
              onHab = true;
              console.log("Has llegado al HAB! Estas a salvo");
              alert("HOGAR, DULCE HOGAR");
            }
          }
        }
      break;

      case "S":
        if(rover2.y == 0){
          console.log("Cuidado, te sales del planeta!");
        }else{
          var nextPosition = superficie[rover2.y - 1][rover2.x];
          if(nextPosition == "O"){
            console.log("Cuidado! Un obstaculo");
            alert("Cuidado, que te chocas");
          }else if(nextPosition == "R"){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante, ¿que no lo ves?");
          }else{
            rover2.y -= 1;
            var pos = rover2.y * 50 + 25;
            rover2Html.style.top = pos+"px";
            if(nextPosition == "HAB"){
              onHab = true;
              console.log("Has llegado al HAB! Estas a salvo");
              alert("MATT, ESTAS AHI?");
           }
          }
        }
      break;

      case "E":
        if(rover2.x == 0){
          console.log("Cuidado, te sales del planeta!");
        }else{
          var nextPosition = superficie[rover2.y][rover2.x - 1];
          if(nextPosition == "O"){
          console.log("Cuidado! Un obstaculo");
          alert("Cuidado, una pedazo de piedra");
        }else if(nextPosition == "R"){
          console.log("Cuidado, hay otro Rover delante, no lo ves?");
          alert("Cuidado, hay un Rover delante, ¿que no lo ves?");
          }else{
            rover2.x -=1;
            var pos = rover2.x * 50 + 25;
            rover2Html.style.left = pos+"px";          
            if(nextPosition == "HAB"){
              onHab = true;
              console.log("Has llegado al HAB! Estas a salvo");
              alert("MAMAAAA ESTOY EN CASA!!");
            }
          }
        }
      break;

      case "W":
        if(rover2.x == 9){
          console.log("Cuidado, te sales del planeta");
        }else{
          var nextPosition = superficie[rover2.y][rover2.x + 1];
          if(nextPosition == "O"){
            console.log("Cuidado! Un Obstaculo");
            alert("Cuidado, una Roca");
          }else if(nextPosition == "R"){
            console.log("Cuidado, hay otro Rover delante, no lo ves?");
            alert("Cuidado, hay un Rover delante, ¿que no lo ves?");
          }else{
            rover2.x +=1;
            var pos = rover2.x * 50 + 25;
            rover2Html.style.left = pos+"px";
            if(nextPosition == "HAB"){
              onHab = true;
              console.log("Has llegado al HAB! Estas a salvo");  
              alert("QUIERO MI BOCADILLO!!");
            }
          }
        }
      break;
    }

    superficie[rover2.y][rover2.x] = "R2";
    rover2.travelLog.push("B");
    console.log(rover2);
    console.log(superficie);
  }
}



function turnLeft2(rover2){
  if(botonRover2){
    console.log("Gira a la izquierda!");
    switch (rover2.direction){
      case "N":
        rover2.direction = "W";
        rover2Html.style.webkitTransform = "rotate("+0+"deg)";
      break;

      case "W":
        rover2.direction = "S";
        rover2Html.style.webkitTransform = "rotate("+270+"deg)";
      break;

      case "S":
        rover2.direction = "E";
        rover2Html.style.webkitTransform = "rotate("+180+"deg)";
      break;

      case "E":
        rover2.direction = "N";
        rover2Html.style.webkitTransform = "rotate("+90+"deg)";
      break;
    }
    console.log (rover2);
  }
}

function turnRight2(rover2){
  if(botonRover2){
    console.log("Gira a la derecha!");
    switch (rover2.direction){
      case "N":
        rover2.direction = "E";
        rover2Html.style.webkitTransform = "rotate("+180+"deg)";
      break;

      case "E":
        rover2.direction = "S";
        rover2Html.style.webkitTransform = "rotate("+270+"deg)";
      break;

      case "S":
        rover2.direction = "W";
        rover2Html.style.webkitTransform = "rotate("+0+"deg)";
      break;

      case "W":
        rover2.direction = "N";
        rover2Html.style.webkitTransform = "rotate("+90+"deg)";
      break;
    }
    console.log(rover2);
  }
}

function commands2(command2){
  for(var i = 0; i<command2.length; i++){
    console.log(command2[i]);
    switch (command2[i]) {
      case "f":
        moveForward2(rover2);
      break;
      
      case "b":
        moveBackward2(rover2);
      break;

      case "l":
        turnLeft2(rover2);
      break;

      case "r":
        turnRight2(rover2);
      break;

      default:
        console.log("Eso no va a funcionar!");
      break;
    
    }    
  }
}

function clickBoton1(rover){
  botonRover1 = true;
  alert("Has seleccionado el Rover 1");
  botonRover2 = false;
}

function clickBoton2(rover2){
  botonRover2 = true;
  alert("Has seleccionado el Rover 2");
  botonRover1 = false;
}

