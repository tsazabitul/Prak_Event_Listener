const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

addButton.addEventListener('click', () => {
    const itemText = itemInput.value.trim();

    if (itemText !== '') {
        const newItem = document.createElement('li');
        newItem.textContent = itemText;

        itemList.appendChild(newItem);

        itemInput.value = '';
    } else {
        alert('Masukkan item terlebih dahulu!');
    }
});
