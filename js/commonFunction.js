function getValue(idName){
    const width = document.getElementById(idName).value;
    const widthValue = parseFloat(width);
    return widthValue;
}
function addHistory(name,area){
    const findLocation = document.getElementById('calculation-history');
    newLine = document.createElement('li');
    // const newBtn = document.createElement('button');
    // newBtn.innerText = 'convert m2';
    newLine.innerText =(name + ' '+ ' '+ area+ 'cm2'+ ' '+ ' ');
    // const btn = addBtn();
    // findLocation.appendChild(newLine);
    findLocation.appendChild(newLine);
    const btn = addBtn();
    findLocation.appendChild(btn);
}
function addBtn(){
const newBtn = document.createElement('button');
newBtn.innerHTML = `<p>convert m<sup>2</sup></p>`;
const Location = document.getElementById('calculation-history');
newBtn.classList.add('new-btn')
// Location.appendChild(newBtn);
return newBtn;
}