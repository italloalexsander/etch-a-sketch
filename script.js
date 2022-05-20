const canvas = document.getElementById('canvas');
const input = document.getElementById('quantity');
const rgbSelector = document.getElementById('valueColor');

inputHandler(input.value);

let rgb = rgbSelector.value;

input.addEventListener('input', () => {
    inputHandler(input.value);
});

rgbSelector.addEventListener('input', ()=> {
    rgb = rgbSelector.value;
})



function mouseOverHandler(){
    const boxes = document.getElementsByClassName('boxGrid');
    console.log(boxes);
    Array.from(boxes).forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = rgb;
        });
    });
}

function selectionHandler(input){
    //Maybe add a way to calculate the size of the box by dividing the canvas by the input?
    /*box-sizing: border-box;
    width: 31.25px;
    height: 31.25px;
    border: 1px solid black;  This CSS is here just for reference to the function below*/
    canvas.innerHTML=""
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

function inputHandler(inputValue){
    if(inputValue > 100){
        inputValue = 100;
        alert("Grid should not be larger than 100")
        input.value=100;
    }
    selectionHandler(inputValue);
}

