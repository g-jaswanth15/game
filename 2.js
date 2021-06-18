var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth -40;


const rectangle = {
    x:20,
    y:canvas.height/2 - 40,
    dx:5
}
function player(){
    ctx.fillStyle = 'blue';
ctx.fillRect(rectangle.x,rectangle.y,40,40);
ctx.fillStyle = 'black'
ctx.fillRect(10,canvas.height/2,canvas.width-20,50);

ctx.fillStyle = 'black'
ctx.fillRect(10,canvas.height/4,canvas.width-20,50);
}

// player()
var dist = canvas.height/2 -canvas.height/4 - 40;
console.log(dist)
function increment(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    player();
    rectangle.x += rectangle.dx;

    //stop the rect
    if(rectangle.x+60 > canvas.width){
        rectangle.dx *= 0 ;
    }

    requestAnimationFrame(increment);
     
    
}
increment();

addEventListener('click',()=>{
    if(rectangle.y ==canvas.height/2 -40 ){
    rectangle.y = rectangle.y-60;
    console.log(rectangle.y)
    }
    else if(rectangle.y ==canvas.height/4 +50){
          rectangle.y = rectangle.y+60;
          console.log(rectangle.y)
    }
})

