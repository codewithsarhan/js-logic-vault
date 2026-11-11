let stopButton = document.querySelector('#btn2');
let startButton = document.querySelector('#btn1');
let body = document.querySelector('body')


let colorGenerator = () => {
let hex = '0123456789ABCDEF'

let color = '#'

for(let i = 0 ; i < 10 ; i++){

color += hex[Math.floor(Math.random() * 16)];

}

return color ;

}

console.log(colorGenerator());


let time= [] ;

startButton.addEventListener('click' , () => {

time = setInterval(function (){

    let color = colorGenerator();

    body.style.backgroundColor = color ;

}, 1000)

})

stopButton.addEventListener('click' , () => {

clearInterval(time);
console.log('Stopped');


})

