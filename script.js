const canvas = document.getElementById('canvas');

const selectionHandler = (input) =>{
    for(i = 0;i < input*input; i++){
        aux = document.createElement('div');
        aux.classList.add('box16')
        canvas.appendChild(aux);
    }
    
}

selectionHandler(16);