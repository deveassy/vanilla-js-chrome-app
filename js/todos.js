const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODO_KEY = "todos";

let todoArray = [];

function saveTodos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todoArray)); // localStorage에 저장된 값을 불러와서 setting하기 위해 배열모양의 string으로 저장하기 위한 방법
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

const savedTodos = localStorage.getItem(TODO_KEY);

if (savedTodos) {
  const parseTodos = JSON.parse(savedTodos);
  todoArray = parseTodos; // localStorage에 값이 있을 경우에는 최초 빈 배열인 todoArray에 push를 해서 초기화를 시키지 않도록 parseTodos를 대입시켜줌
  parseTodos.forEach((item) => paintTodo(item));
}
