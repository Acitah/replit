// function myfunction(){
//     var x = document.getElementById("navbar");
// if (x.className === "mybar") {
//   x.className += " responsive";
// } else {
//   x.className = "mybar";
// }
// }
let menu = document.querySelector('#menu');
let beer = document.querySelector('.bee');

menu.onclick =()=>{
    beer.classList.toggle('bee');
    
}