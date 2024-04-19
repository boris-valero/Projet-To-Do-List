const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Changer la couleur du thème
const standardTheme = document.querySelector('.standard-theme');
const lightTheme = document.querySelector('.light-theme');
const darkerTheme = document.querySelector('.darker-theme');
standardTheme.addEventListener('click', () => changeTheme('standard'));
lightTheme.addEventListener('click', () => changeTheme('light'));
darkerTheme.addEventListener('click', () => changeTheme('darker'));

todoButton.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newtoDo = document.createElement("li");
  newtoDo.innerText = todoInput.value;
  newtoDo.classList.add("todo-item");
  todoDiv.appendChild(newtoDo);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = "✔";
  completedButton.classList.add("complete-btn");
  completedButton.addEventListener("click", completedcheck)
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = "✘";
  trashButton.classList.add("trash-btn");
  trashButton.addEventListener("click", deleteCheck);
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
    const todo = item.parentElement;
    todo.remove();
}

function completedcheck(e) {
  const item = e.target;
  const todo = item.parentElement;
  todo.classList.toggle("completed");
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

