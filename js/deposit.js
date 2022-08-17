document.getElementById('deposit-btn').addEventListener('click', function(){
    setTextValue('deposit', getTextValue('deposit') + getInputFieldValue('deposit-field'))
    setTextValue('balance', getTextValue('balance') + getInputFieldValue('deposit-field'));
    document.getElementById('deposit-field').value = '';
})