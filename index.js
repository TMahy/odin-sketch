


// Initialising the grid of 16*16 squares

const containerDiv = document.querySelector('.container');
const clearButton = document.querySelector('.btn-clear');
const newGridButton = document.querySelector('.btn-newGrid');
  
let gridSize = 16;

let squares = addSquares(containerDiv, gridSize);

//On clear button click, 'reset' all the squares to the default color. 
clearButton.addEventListener('click', () =>{
    squares.forEach((square) => {
        square.style.backgroundColor = 'lightgrey';
    })
})
//On new grid button click, prompt user for input, update the grid
newGridButton.addEventListener('click', () =>{
    do{
        inputSize = parseInt(window.prompt("Please enter a number between 8 and 32"));
    } while(isNaN(inputSize) || inputSize < 8 || inputSize > 32)
    gridSize = inputSize;
    squares = updateGrid(containerDiv, squares, gridSize);
})

function addSquares(container, gridSize){
    container.style.maxWidth = `${gridSize * 20}px`;
    container.style.minWidth = `${gridSize * 20}px`;
    for(let i = 0; i < gridSize**2; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        //For each square, on mouse over, fill it in black
        square.addEventListener('mousemove', () =>{
            square.style.backgroundColor = 'black';
        })
    }

    return document.querySelectorAll('.square');
}

function updateGrid(container, squares, gridSize){
    //Removes the existing squares from the container
    squares.forEach((square) => {
        square.remove();
    })
    //Calls add squares with the gridsize, which returns an array of DOM elements 'squares'
    let newSquares = addSquares(container, gridSize);
    return newSquares;
}




