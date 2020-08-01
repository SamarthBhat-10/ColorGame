var numSquares = 6
var colours = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorPicked = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colours = generateRandomColors(numSquares);
    colorPicked = pickColor();
    colorDisplay.textContent = colorPicked;

    for (var i=0 ;i<squares.length ;i++){
        if (colours[i]){
            squares[i].style.backgroundColor = colours[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6
    colours = generateRandomColors(numSquares);
    colorPicked = pickColor();
    colorDisplay.textContent = colorPicked;

    for (var i=0 ;i<squares.length ;i++){
            squares[i].style.backgroundColor = colours[i];
            squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click",function(){
    //Generate all new colours
    colours = generateRandomColors(numSquares);
    // Pick a new colour from array
    colorPicked = pickColor();
    //Change colorDisplay to match picked colour
    colorDisplay.textContent = colorPicked;

    displayMessage.textContent = "";
    resetButton.textContent = "New Colours";
    // Change colours of squares
    for (var i =0 ;i<squares.length ;i++){
        squares[i].style.backgroundColor = colours[i];
    }
    h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = colorPicked;

for (var i=0; i<squares.length ;i++){
    // Add initial colour to squares
    squares[i].style.backgroundColor = colours[i];

    // Add click listeners to squares
    squares[i].addEventListener("click",function(){
        // Grab colour of picked square
        var clickedColor = this.style.backgroundColor;

        //console.log(clickedColor,colorPicked);
        if (clickedColor === colorPicked){
            // Right picked
            displayMessage.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        }
        else{
            // Wrong picked
            this.style.backgroundColor = "#232323";
            displayMessage.textContent = "Try Again!"
        }
    });
}

//When we click correct colour all squares should change to that colour

function changeColors(color){
    // Loop through all squares
    for (var i=0 ;i<squares.length ;i++){
        // Change colour to match given colour
        squares[i].style.backgroundColor = color;
    }
}

// To generate a random colour picked in the beginning
function pickColor(){
    var random = Math.floor(Math.random() * colours.length);
    // Range of Math.random is between 0 and 1 ,so we multiply it by the array length of colours
    // Picks random index from the colours array
    return colours[random];
}

// To generate Random colours array
function generateRandomColors(num){
    var arr = [];
    // Generate random colour and push into array
    for (var i=0 ;i<num ;i++){
        arr.push(randomColor());
    }
    return arr;
}

// For Random RGB Colour
function randomColor(){
    // Pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    // Pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    // Pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);

    return"rgb("+ r + ", " + g +", " + b + ")";
    // To return in this format "rgb(r, g, b)"
}