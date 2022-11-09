'use strict';

//----GLOBAL TODOLIST VARIABLE----

const toDoList = document.querySelector('.toDoList');
// ADD BUTTON & ADD DIALOG

// ------OPENING ADD DIALOG------

const addButton = document.querySelector('.addButton');
const addDialog = document.querySelector('.add-dialog');
const overlay = document.querySelector('.overlay');
const closeDialogButton = document.querySelector('.close-button');

const addDialogOpen = () => {
  addDialog.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const addDialogClose = () => {
  addDialog.classList.add('hidden');
  overlay.classList.add('hidden');
};

addButton.addEventListener('click', addDialogOpen);
closeDialogButton.addEventListener('click', addDialogClose);
overlay.addEventListener('click', addDialogClose);

// ------ADDING LIST FROM ADD DIALOG------

const addListButton = document.querySelector('.addListButton');
const clearTextButton = document.querySelector('.clearTextButton');
const listGroup = document.querySelector('.list-group');

//---- Creating variables to create a new list into the box ----

function createList() {
  const ul = document.querySelector('.list-group');
  const li = document.createElement('li');
  const div = document.createElement('div');
  const input = document.createElement('input');
  const label = document.createElement('label');

  //- APPENDING CHILD----

  ul.appendChild(li);
  li.appendChild(div);
  div.append(input, label);

  li.className = 'list-group-item';

  input.type = 'checkbox';
  input.className = 'form-check-input';

  label.className = 'form-check-label';
  label.innerHTML = document.querySelector('.addListContent').value;
}

function addList() {
  let addListContent = document.querySelector('.addListContent').value;
  addListContent === '' ? alert('Your List is Empty!') : createList();
}
function clearText() {
  document.querySelector('.addListContent').value = '';
}
addListButton.addEventListener('click', addList);
clearTextButton.addEventListener('click', clearText);

// ----DELETE DIALOG----
const delButton = document.querySelector('.delButton');

delButton.addEventListener('click', () => {
  const unorderList = document.querySelector('.list-group');
  // toDoList.removeChild(label);
  console.log(unorderList.childElementCount);
  console.log(unorderList);
  unorderList.removeChild(unorderList.firstChild);
});
