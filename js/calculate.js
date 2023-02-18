const tngCalculate = document.getElementById('tng-btn').addEventListener("click",function(){
    const width = getValue('tr-width');
    const height = getValue('tr-height');
    const area = (.5*width*height);  
    // console.log(area);
    addHistory('Triangle',area);
})
const doCalculate = document.getElementById('rng-btn').addEventListener("click",function(){
    const width = getValue('rng-width');
    const height = getValue('rng-height');
    const area = (width*height);  
    // console.log(area);
    addHistory('Rectangle',area);
})
