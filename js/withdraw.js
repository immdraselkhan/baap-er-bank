document.getElementById('withdraw-btn').addEventListener('click', function(){
    setTextValue('withdraw', getTextValue('withdraw') + getInputFieldValue('withdraw-field'));
    setTextValue('balance', getTextValue('balance') - getInputFieldValue('withdraw-field'));
    document.getElementById('withdraw-field').value = '';
})