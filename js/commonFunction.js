// Return Floating value for given id.
function getValue(idName){
    const input = document.getElementById(idName);
    const inputString = input.value;
    const inputValue = parseFloat(inputString);
    input.value = '';
    if(isNaN(inputValue)){
        console.log("Please Enter a Number.");
        return 0;
    }
    else if(inputValue<0){
        console.log("Please Enter Positive Number");
        return 0;
    }
    else{
        return inputValue;
    }
}

// Display Calculation result in Calculation area.
function addHistory(name,area){
    const findLocation = document.getElementById('calculation-history');
    newLine = document.createElement('li');
    // const newBtn = document.createElement('button');
    // newBtn.innerText = 'convert m2';
    if(area<=0){
        
    }
    else{
    newLine.innerText =(name + ' '+ ' '+ area+ 'cm2'+ ' '+ ' ');
    // const btn = addBtn();
    // findLocation.appendChild(newLine);
    findLocation.appendChild(newLine);
    const btn = addBtn();
    findLocation.appendChild(btn);
    }
}
// Create auto button for each calculation.
function addBtn(){
const newBtn = document.createElement('button');
newBtn.innerHTML = `<p>convert m<sup>2</sup></p>`;
const Location = document.getElementById('calculation-history');
newBtn.classList.add('new-btn')
// Location.appendChild(newBtn);
return newBtn;
}

// Provide Random Color.
function random_bg_color(id) {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    const place = document.getElementById(id);
    place.style.background = bgColor;
    }


