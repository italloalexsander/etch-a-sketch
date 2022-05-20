const canvas = document.getElementById('canvas');


const mouseOverHandler = () => {
    const boxes = document.getElementsByClassName('box16');
    console.log(boxes);
    Array.from(boxes).forEach(element => {
        element.addEventListener('mouseover', () => {
            element.classList.add('boxColored');
        });
    });
}

const selectionHandler = (input) =>{
    //Maybe add a way to calculate the size of the box by dividing the canvas by the input?
    for(i = 0;i < input*input; i++){
        aux = document.createElement('div');
        aux.classList.add('box16')
        canvas.appendChild(aux);
    }
    mouseOverHandler();
}

let grid = 16;


selectionHandler(grid);