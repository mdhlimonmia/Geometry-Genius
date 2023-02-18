const tngCalculate = document.getElementById('tng-btn').addEventListener("click",function(){
    const width = getValue('tr-width');
    const height = getValue('tr-height');
    // if(width === 0 || height === 0){
    //     console.log("Invalid Input");
    // }
    // else{
    const area = (.5*width*height);  
    addHistory('Triangle',area);
    
})
const rngCalculate = document.getElementById('rng-btn').addEventListener("click",function(){
    const width = getValue('rng-width');
    const height = getValue('rng-height');
    const area = (width*height);  
    // console.log(area);
    addHistory('Rectangle',area);
})
const prgCalculate = document.getElementById('prg-btn').addEventListener("click",function(){
    const width = getValue('prg-width');
    const height = getValue('prg-height');
    const area = (width*height);  
    // console.log(area);
    addHistory('Parallelogram',area);
})
const rbsCalculate = document.getElementById('rbs-btn').addEventListener("click",function(){
    const width = getValue('rbs-width');
    const height = getValue('rbs-height');
    const area = (0.5*width*height);  
    // console.log(area);
    addHistory('Rhombus',area);
})
const penCalculate = document.getElementById('pen-btn').addEventListener("click",function(){
    const width = getValue('pen-width');
    const height = getValue('pen-height');
    const area = (0.5*width*height);  
    // console.log(area);
    addHistory('Pentagon',area);
})
const elpCalculate = document.getElementById('elp-btn').addEventListener("click",function(){
    const width = getValue('elp-width');
    const height = getValue('elp-height');
    const area = (3.1416*width*height);  
    const finalArea = area.toFixed(2);
    addHistory('Ellipse',finalArea);
})
