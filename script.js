var randnumer1 = Math.floor(Math.random()*6)+1;
var randimge1 = "images/dice"+randnumer1+".png";
document.querySelectorAll("img")[0].setAttribute("src" , randimge1 );

var randnumb2 = Math.floor(Math.random()* 6 )+1;
var randimg2 = "images/dice"+  randnumb2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randimg2);

if (randnumer1 > randnumb2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩"
    
}
else if (randnumer1 < randnumb2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}