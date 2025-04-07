import "bootstrap";
import "./style.css";

function getRandomCard() {  
  const cardValue = ["A","2","3","4", "5", "6", "7", "8", "9","10", "J", "Q", "K"];
  const suits = [
    {symbol: "♦", color: "red"},
    {symbol: "♥", color: "red"},
    {symbol: "♠", color: "black"},
    {symbol: "♣", color: "black"}
  ];
  const randomValue = cardValue[Math.floor(Math.random()*cardValue.length)];
  const randomSuit = suits[Math.floor(Math.random()*suits.length)];

  document.getElementById("card-number").textContent = randomValue;
  document.getElementById("top-icon").textContent = randomSuit.symbol;
  document.getElementById("bottom-icon").textContent = randomSuit.symbol;

  const color = randomSuit.color
  document.getElementById("card-number").style.color = color;
  document.getElementById("top-icon").style.color = color;
  document.getElementById("bottom-icon").style.color = color;
}

window.getRandomCard = getRandomCard;

window.onload = getRandomCard;


  
 
