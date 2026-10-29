// 🎯 Challenge: Dynamic Product Card

// Requirements:
// 1. document.createElement() se ek div banao.
// 2. className aur id set karo.
// 3. setAttribute() se title add karo.
// 4. .style se background color aur padding set karo.
// 5. document.createTextNode() se "Gaming Mouse" text add karo.
// 6. appendChild() se card ko body mein show karo.

let body = document.querySelector('body');
let div = document.createElement('div');
div.className = "main-cn";
div.id = "mn-cn";
div.style.backgroundColor = "Pink";
div.style.color = "Blue";
let text = document.createTextNode("Gaming Mouse");
body.appendChild(div);