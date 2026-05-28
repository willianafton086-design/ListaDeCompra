const form = document.getElementById('shopping-form');
const input = document.getElementById('item-input');
const list = document.getElementById('shopping-list');
const clearButton = document.getElementById('clear-button');
const emptyMessage = document.getElementById('empty-message');

const updateEmptyMessage = () => {
    const hasItems = list.children.length > 0;
    emptyMessage.classList.toggle('hidden', hasItems);
};

const addItem = (text) => {
    if (!text.trim()) return;

    const item = document.createElement('li');
    item.textContent = text.trim();
    list.appendChild(item);
    input.value = '';
    input.focus();
    updateEmptyMessage();
};

const clearItems = () => {
    list.innerHTML = '';
    updateEmptyMessage();
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addItem(input.value);
});

clearButton.addEventListener('click', clearItems);

updateEmptyMessage();
