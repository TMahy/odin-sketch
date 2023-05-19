


// Initialising the grid of 16*16 squares

const containerDiv = document.querySelector('.container');
const clearButton = document.querySelector('.btn-clear');
const newGridButton = document.querySelector('.btn-newGrid');
  
let gridSize = 16;

let squares = addSquares(containerDiv, gridSize);


//For each square, on mouse over, fill it in black
squares.forEach((square) => {
    square.addEventListener('mousemove', () =>{
        square.style.backgroundColor = 'black';
    })
})

//On clear button click, 'reset' all the squares to the default color. 
clearButton.addEventListener('click', () =>{
    squares.forEach((square) => {
        square.style.backgroundColor = 'lightgrey';
    })
})

// New Grid (New grid size) functionality
// - On new grid button click
// - Prompt the user for a 'grid size' (number of rows)
//      - Integer, bounded by a max and min
// - Update gridsize variable
// - Remove current grid
// - Resize elements to make square
// - Add the new grid

function addSquares(container, gridSize){
    
    container.style.maxWidth = `${gridSize * 20}px`;
    container.style.minWidth = `${gridSize * 20}px`;

    for(let i = 0; i < gridSize**2; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    return document.querySelectorAll('.square');
}

function updateGrid(container, squares, gridSize){
    squares.forEach((square) => {
        square.remove();
    })

    let newSquares = addSquares(container, gridSize);
    return newSquares;
}




