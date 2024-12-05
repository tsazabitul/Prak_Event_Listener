const inputField = document.getElementById('inputField');
const displayKarakter = document.getElementById('displayKarakter');

inputField.addEventListener('keydown', function(event){
    displayKarakter.textContent = event.key;
});