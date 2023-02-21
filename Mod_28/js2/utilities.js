function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';

    return inputFieldValue;
}

function getElementValueById(elementId){
    const textField = document.getElementById(elementId);
    const textFieldInnerString = textField.innerText;
    const textFieldInner = parseFloat(textFieldInnerString);
    return textFieldInner;

}

function setTextElementValueById(ElementId, newValue){
   const textField = document.getElementById(ElementId);
   textField.innerText = newValue;

}