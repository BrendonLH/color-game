'use strict';

// global variables
var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.querySelector('#colordisplay');
var message = document.querySelector('#message');
var h1 = document.querySelector('h1');

colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //   console.log(colors[i]);
  // add click listeners to squares
  squares[i].addEventListener('click', function(){
  // grab color of picked square
    var clickedColor = this.style.backgroundColor;
    //compare color to picked color
    console.log(clickedColor, pickedColor);
    if(clickedColor === pickedColor){
      message.textContent = ('That is Correct');
      changeColors(clickedColor);
      h1.style.backgroundColor = pickedColor;
    }
    else{
      this.style.backgroundColor = '#232323';
      message.textContent = ('Try Again!');
    }
  });
}

// functions for colors
function changeColors(color){
//   loop through all squares
  for(var i = 0; i < squares.length; i++){
    //   Change each square to match given color
    squares[i].style.backgroundColor = color;
  }
}
// udemy random function randomizes the color
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
//   make array
  var arr = [];
  // repeat num times
  for(var i = 0; i < num; i++){
    //   get random color and push into array
    arr.push(randomColor());
  }
// return the array
  return arr;
}

function randomColor(){
//   pick a 'red' from 0-255
//   pick a 'green' from 0-255
//   pick a 'blue' from 0-255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}