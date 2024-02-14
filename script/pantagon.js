function calculatePentagonArea(){
const perimeter = getInputValuedById('pentagon-perimeter');
const apothem = getInputValuedById('pentagon-apothem');
console.log(perimeter,apothem);
const area = 0.5*perimeter*apothem;
setInnerTextById('pentagon-area',area);
}

function getInputValuedById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
        const  inputValueText  = inputField.value;
        const  value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId,area){
    const element= document.getElementById(elementId);
    element.innerText = area;
}

