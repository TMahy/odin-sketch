const containerDiv = document.querySelector('.container');
const gridSize = 16**2;

for(let i = 0; i < gridSize; i++){
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    containerDiv.appendChild(squareDiv);
}

const squares = document.querySelectorAll('.square');
const clearButton = document.querySelector('.btn-clear');

squares.forEach((square) => {
    square.addEventListener('mousemove', () =>{
        square.style.backgroundColor = 'black';
    })
})

clearButton.addEventListener('click', () =>{
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    })
})



