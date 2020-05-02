// Select color input
const color = document.querySelector("#colorPicker")
color.addEventListener('change', color);
// Select size input

// When size is submitted by the user, call makeGrid()
const submit = document.querySelector("[type='submit']");
  submit.addEventListener("click", makeGrid);

var canvas = document.querySelector("#pixelCanvas");

function makeGrid() {
  canvas.innerHTML = ""
  event.preventDefault();
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  for (var i = 0; i < height; i++) {
    let createRow = document.querySelector("#pixelCanvas").insertRow();
    for(var j = 0; j < width; j++) {
      let cell = createRow.insertCell();
      }
    }
  }

document.getElementById('pixelCanvas').addEventListener("click", function() {
  event.target.style.backgroundColor =
  document.getElementById("colorPicker").value;
});
// Your code goes here!
