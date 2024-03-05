function getInputValueById(id){
    const inputField = document.getElementById(id);
    const inputValueNum = parseFloat(inputField.value);
    inputField.value = '';
    console.log(inputField.value)
    if(inputValueNum <= 0 || isNaN(inputValueNum) ){
        alert('Please input properly');
        return 0;
    }
    else{
        return inputValueNum;
    }
}

function getElementValueById(id){
    const textElement = document.getElementById(id);
    const textElementValueNum = parseFloat(textElement.innerText);
    return textElementValueNum;
}


function setTextElemantValue(id , newValue){
    const textElement = document.getElementById(id);
    if(newValue == 0 ){
        return;
    }
    textElement.innerText = newValue;
}