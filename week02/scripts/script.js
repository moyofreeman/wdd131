const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const listElement = document.createElement('li');
const deleteButton = document.createElement('button');
listElement.textContent = input.value;
delete.Button.textContent = '❌';
//list.appendChild(deleteButton);
listElement.append(deleteButton);
list.append(listElement);

