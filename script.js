const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);


function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newtoDo = document.createElement("li");
  newtoDo.innerText = todoInput.value;
  newtoDo.classList.add("todo-item");
  todoDiv.appendChild(newtoDo);
  saveLocalTodos(todoInput.value);

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
    removeLocalTodos(todo);
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

function saveLocalTodos(todo){
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function(todo){
    const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newtoDo = document.createElement("li");
  newtoDo.innerText = todo;
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
  })
}

function removeLocalTodos(todo){
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}