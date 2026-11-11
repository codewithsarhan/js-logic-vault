let stopButton = document.querySelector('#btn2');
let startButton = document.querySelector('#btn1');
let body = document.querySelector('body')

let time= [] ;

startButton.addEventListener('click' , () => {

    let color = 'red';

time = setInterval(function (){


if (color === 'red') {
body.style.backgroundColor = 'red' 
    
color = 'yellow';

}else if (color === 'yellow'){

body.style.backgroundColor = 'yellow' 

color = 'orange' ;

}else if (color === 'orange'){

body.style.backgroundColor = 'orange' 

color = 'pink'

}else if (color === 'pink'){

body.style.backgroundColor = 'pink' 

color = 'blue'

}else if (color === 'blue'){

body.style.backgroundColor = 'blue' 

color = 'lightblue'

}else if (color === 'lightblue'){

body.style.backgroundColor = 'lightblue' 

color = 'green'

}
else if (color === 'green'){

body.style.backgroundColor = 'green' 

color = 'purple'

}else if (color === 'purple'){

body.style.backgroundColor = 'purple' 

color = 'red'

}


}, 1000)

})

stopButton.addEventListener('click' , () => {

clearInterval(time);
console.log('Stopped');


})

