const tngCalculate = document.getElementById('tng-btn').addEventListener("click",function(){
    const width = getValue('tr-Width');
    const height = getValue('tr-height');
    const area = (.5*width*height);  
    // console.log(area);
    addHistory('Triangle',area);
})
const doCalculate = document.getElementById('calculate-btn').addEventListener("click",function(){
    const width = getValue('tr-Width');
    const height = getValue('tr-height');
    const area = (.5*width*height);  
    // console.log(area);
    addHistory('Triangle',area);
})
