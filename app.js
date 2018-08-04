
var rover = {
  direction: "N",
  y: 1,
  x: 0,
  travelLog: []
};

var roverHtml = document.getElementById("rover");


var onHab = false;

var rover2 = {
  direction: "W",
  y: 9, 
  x: 9,
  travelLog: []
};
alert("tienes que volver a casa! Usa las flechas para poder avanzar o retroceder. Las flechas laterales cambian la direccion del rover, buen viaje!");
console.log("Tu rover esta mirando hacia el" + " " + rover.direction);
console.log("Estas en la casilla" + " " + rover.x + " " + rover.y);
console.log("Corre, tienes 10 nucleos de energia para llegar al HAB y cada movimiento adelante o atras consume un nucleo.");

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

superficie[rover.y][rover.x] = "R";
superficie[rover2.y][rover2.x] = "R2";

function moveForward(rover){
  console.log("Avanzas!");
  if(onHab){
    superficie[rover.y][rover.x] = "HAB";
    onHab = false;
  }else{
    superficie[rover.y][rover.x] = null;
  }
  switch (rover.direction)  {
    case "N":
      if(rover.y == 0){
        console.log("Cuidado, te sales del planeta!");
      }else{
        var nextPosition = superficie[rover.y - 1][rover.x];
        if(nextPosition == "O"){
          console.log("Cuidado! Un obstaculo");
          alert("Cuidado, que te vas a reventar");
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


function moveBackward(rover){
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



function turnLeft(rover){
  console.log("Gira a la izquierda!");
  switch (rover.direction){
    case "N":
      rover.direction = "W";
      break;

    case "W":
      rover.direction = "S";
      break;

    case "S":
      rover.direction = "E";
      break;

    case "E":
      rover.direction = "N";
      break;
  }
  console.log (rover);
}

function turnRight(rover){
  console.log("Gira a la derecha!");
  switch (rover.direction){
    case "N":
      rover.direction = "E";
      break;

    case "E":
      rover.direction = "S";
      break;

    case "S":
      rover.direction = "W";
      break;

    case "W":
      rover.direction = "N";
      break;
  }
  console.log(rover);
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


console.log(superficie);


