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

function changeTheme(color) {
  localStorage.setItem('savedTheme', color);
  savedTheme = localStorage.getItem('savedTheme');

  document.body.className = color;
  // Change blinking cursor for darker theme:
  color === 'darker' ? 
      document.getElementById('title').classList.add('darker-title')
      : document.getElementById('title').classList.remove('darker-title');

  document.querySelector('input').className = `${color}-input`;
  // Change todo color without changing their status (completed or not):
  document.querySelectorAll('.todo').forEach(todo => {
      Array.from(todo.classList).some(item => item === 'completed') ? 
          todo.className = `todo ${color}-todo completed`
          : todo.className = `todo ${color}-todo`;
  });
  
   document.querySelectorAll('button').forEach(button => {
      Array.from(button.classList).some(item => {
          if (item === 'check-btn') {
            button.className = `check-btn ${color}-button`;  
          } else if (item === 'delete-btn') {
              button.className = `delete-btn ${color}-button`; 
          } else if (item === 'todo-btn') {
              button.className = `todo-btn ${color}-button`;
          }
      });
  });
}

let savedTheme = localStorage.getItem('savedTheme');
savedTheme === null ?
    changeTheme('standard')
    : changeTheme(localStorage.getItem('savedTheme'));
