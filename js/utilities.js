function getInputFieldValue(inputFieldId) {
    const inputFieldValue = parseFloat(document.getElementById(inputFieldId).value);
    return inputFieldValue;
}
function getTextValue(textTagId) {
    const textValue = parseFloat(document.getElementById(textTagId).innerText);
    return textValue;
}
function setTextValue(textTagId, amount) {
    document.getElementById(textTagId).innerText = amount;
}