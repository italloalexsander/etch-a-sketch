const canvas = document.getElementById('canvas');
const input = document.getElementById('quantity');
const rgbSelector = document.getElementById('valueColor');
const eraser = document.getElementById('eraser');
const modeSelector = document.getElementsByClassName('selection');

let rgb = rgbSelector.value;
let mode = 'default';

inputHandler(input.value);

input.addEventListener('input', () => {
    inputHandler(input.value);
});

rgbSelector.addEventListener('input', ()=> {
    rgb = rgbSelector.value;
})

eraser.addEventListener('click', ()=>{
    inputHandler(input.value);
})

Array.from(modeSelector).forEach(element => {
    element.addEventListener('change', ()=>{
        mode = element.value;
    })
})

const randomColorGenerator = ()=> {
    red = Math.random() * (255 - 0 + 1) + 0
    blue = Math.random() * (255 - 0 + 1) + 0
    green = Math.random() * (255 - 0 + 1) + 0

    return [red, blue, green];
}

//Need to fix so that there is a way to immediately change to the new mode without needing to clear the canvas
function mouseOverHandler(){
    const boxes = document.getElementsByClassName('boxGrid');
    if(mode === 'default'){
        Array.from(boxes).forEach(element => {
            element.addEventListener('mouseover', () => {
                element.style.backgroundColor = rgb;
            });
        });
    }
    else if(mode === 'rainbow'){
        Array.from(boxes).forEach(element => {
            element.addEventListener('mouseover', () => {
                let randomColor = randomColorGenerator()
                element.style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
            });
        });
    }
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

