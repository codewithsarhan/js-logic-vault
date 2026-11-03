async function datalearning() {
    
let productData = await fetch('https://dummyjson.com/products/10');
let convertJson = await productData.json();
console.log(convertJson);

let genDataBtn = document.querySelector('#genDataBtn');
let prName = document.querySelector('#prName');
let prImg = document.querySelector('#prImg');
let prPrice = document.querySelector('#prPrice');

genDataBtn.addEventListener("click" , () => {

prImg.src = convertJson.images[1] ;
prPrice.textContent = convertJson.price;

    
console.log(prImg);
console.log(prName);
console.log(prPrice);

})

}

datalearning()

