const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const todoArray = [];

function saveTodos() {
  localStorage.setItem("todos", todoArray);
}

function deleteTodo(event) {
  const list = event.target.parentElement;
  list.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  const button = document.createElement("button");

  li.appendChild(button);
  span.innerText = newTodo;
  button.innerText = "❌";
  todoList.appendChild(li);
  button.addEventListener("click", deleteTodo);
}

function handleTodoForm(event) {
  event.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";
  todoArray.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoForm);
