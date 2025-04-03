let counter = 0;

function increment(){
    counter++;
    renderState();
}

function renderState(){
    console.log(counter);
}

setInterval (function (){
    increment();
}, 1000);