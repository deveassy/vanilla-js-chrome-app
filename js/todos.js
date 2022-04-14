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
  todoArray = todoArray.filter((item) => item.id !== parseInt(list.id)); // 삭제버튼을 클릭한 li를 제외한 li들을 필터링
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id; // object형의 newTodo의 id를 li의 id로
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoForm(event) {
  event.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  todoArray.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoForm);

const savedTodos = localStorage.getItem(TODO_KEY);

if (savedTodos) {
  const parseTodos = JSON.parse(savedTodos);
  todoArray = parseTodos; // localStorage에 값이 있을 경우에는 최초 빈 배열인 todoArray에 push를 해서 초기화를 시키지 않도록 parseTodos를 대입시켜줌
  parseTodos.forEach(paintTodo);
}
