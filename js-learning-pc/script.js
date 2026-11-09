let productlist = document.querySelector('#product-list')

productlist.addEventListener('click' , (event) => {

console.log(event.target.tagName)

if (event.target.tagName === 'IMG') {
    

console.log(event.target);


}

if (event.target.tagName === 'BUTTON') {
    
let removeList = event.target.parentNode ;
removeList.remove()

}

if (event.target.tagName === 'A') {
    
    event.preventDefault()

}

})