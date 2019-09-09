window.onload = function() {
  var canvas = document.getElementById('road');
  var ctx = canvas.getContext('2d');
  var frameCounter = 0;
  var obstacleArray = [];
  var img = new Image(); // Create new img element
  img.src = "images/car.png"; // Set source path
  var car = {
    x: 250,
    y: 450,
    moveLeft: function() {
      if (this.x > 0) {
        this.x -= 10;
      }
    },
    moveRight: function() {
      if (this.x < 420) {
        this.x += 10;
      }
    }
  };
  
  class Obstacle {
    constructor() {
      this.x = Math.floor(Math.random() * 500);
      this.y = Math.floor(Math.random() * -100);
      this.height = Math.floor(Math.random() * 100);
      this.width = Math.floor(Math.random() * 100);
    }
  }

  // var obstacle = new Obstacle();

  document.getElementById("start-button").onclick = function() {
    ctx.drawImage(img, car.x, car.y, 70, 120);

    startGame();
    window.requestAnimationFrame(updateCanvas);
  };

  function startGame() {

    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37:
          car.moveLeft();
          console.log("left", car);
          break;
        case 39:
          car.moveRight();
          console.log("right", car);
          break;
      }
    };
  }
  function updateCanvas() {
    ctx.clearRect(0, 0, 500, 600);
    ctx.drawImage(img, car.x, car.y, 70, 120);
    
    frameCounter++;
    if (frameCounter % 120 == 0) {
      var obstacle = new Obstacle();
      obstacleArray.push(obstacle);
      console.log(obstacleArray);
    }
    for (var i = 0; i < obstacleArray.length; i++) {
      ctx.fillRect(
        obstacleArray[i].x,
        (obstacleArray[i].y += 1),
        obstacleArray[i].width,
        obstacleArray[i].height
      );
    }
    window.requestAnimationFrame(updateCanvas);
  }
};
//  

// function draw() {
//   var canvas = document.getElementById('road');
//     var ctx = canvas.getContext('2d');
//     //beginPath();
//     ctx.fillStyle="green";
//     ctx.fillRect(0, 0, 70, 650);
//     ctx.fillRect(430, 0, 70, 650);
    
//     ctx.fillStyle="grey"
//     ctx.fillRect(70, 0, 10, 650)
//    ctx.fillRect(420, 0, 10, 650)
//    ctx.fillRect(90, 0, 320, 650)
   
//   ctx.fillStyle="white"
//   ctx.fillRect(250, 0, 10, 30)
//   ctx.fillRect(250, 50, 10, 30)
//   ctx.fillRect(250, 100, 10, 30)
//   ctx.fillRect(250, 150, 10, 30)
//   ctx.fillRect(250, 200, 10, 30)
//   ctx.fillRect(250, 250, 10, 30)
//   ctx.fillRect(250, 300, 10, 30)
//   ctx.fillRect(250, 350, 10, 30)
//   ctx.fillRect(250, 400, 10, 30)
//   ctx.fillRect(250, 450, 10, 30)
//   ctx.fillRect(250, 500, 10, 30)
//   ctx.fillRect(250, 550, 10, 30)
//   ctx.fillRect(250, 600, 10, 30)
//   ctx.fillRect(250, 648, 10, 30)
// }

// var car = {
//   x: 225,
//   y: 500,
//    moveLeft:  function() { this.x -= 25 },
//    moveRight: function() { this.x += 25 }
// }

// function drawCar(car){


//   var canvas = document.getElementById('road');
//    var ctx = canvas.getContext('2d');

//   var img = new Image();
//   imgScale = 1/2;

//   img.onload = function() {
//         ctx.drawImage(img, car.x, car.y,100*imgScale,100);
   
//     };

//   img.src = './images/car.png';
// }

//   document.onkeydown = function(e) {
    
//     switch (e.keyCode) {
//       case 37: car.moveLeft();
//         console.log('left',  car); 
//         break;
//       case 39: car.moveRight(); 
//       console.log('right', car); 
//       break;
//     }
//       animate()
//   }
//   obs = [];
// function obstacles(){
//   var place ={
//     X: 0,
//     Y: 0
//   }
//   var canvas = document.getElementById('road');
//   var ctx = canvas.getContext('2d');
//   ctx.clearRect(0, 0, 1500, 1700);
//   ctx.fillStyle = "red"
//   ctx.drawRect(place.X, place.Y, 200, 25)


// }
// obs.push(obstacles)
// function move(){
//   return place.y += 5
// }

// function animate() {
//   var canvas = document.getElementById('road');
//    var ctx = canvas.getContext('2d');
//   ctx.clearRect(0,0,1500,1700);
//   draw() 
//   drawCar(car)
  
//   //window.requestAnimationFrame(animate)
  
// }

 




// window.onload = function() {
//   document.getElementById("start-button").onclick = function() {
//     startGame();
    
//   };
  
//   // draw() 
//   // drawCar(car)
//   animate()
//   function startGame() {
//     console.log("Starting game")
//     document.getElementById('road');
 
  
//   }
// };

