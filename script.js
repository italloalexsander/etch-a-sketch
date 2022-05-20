const canvas = document.getElementById('canvas');


const mouseOverHandler = () => {
    const boxes = document.getElementsByClassName('boxGrid');
    console.log(boxes);
    Array.from(boxes).forEach(element => {
        element.addEventListener('mouseover', () => {
            element.classList.add('boxColored');
        });
    });
}

const selectionHandler = (input) =>{
    //Maybe add a way to calculate the size of the box by dividing the canvas by the input?
    /*box-sizing: border-box;
    width: 31.25px;
    height: 31.25px;
    border: 1px solid black;  This CSS is here just for reference to the function below*/
    let sizeOfDivs = (500/input);
    sizeOfDivs.toFixed(1);
    for(i = 0;i < input*input; i++){
        aux = document.createElement('div');
        aux.style.height = `${sizeOfDivs}px`;
        aux.style.width = `${sizeOfDivs}px`;
        aux.style.boxSizing = 'border-box';
        aux.style.border = '1px solid black';
        aux.classList.add('boxGrid');
        canvas.appendChild(aux);
    }
    mouseOverHandler();
}

let grid = 32;


selectionHandler(grid);