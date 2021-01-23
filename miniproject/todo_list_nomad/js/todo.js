const todoForm = document.querySelector('.js_todoForm'),
      todoInput = todoForm.querySelector('input'),
      todoList = document.querySelector('.js_todoList');

const TODOS_LS = 'todos';
let todos = [];

function deleteTodo(event) {
    const button = event.target;
    const li = button.parentNode;
    todoList.removeChild(li);
    const cleanTodos = todos.filter(function(todo) {
        return todo.id !== parseInt(li.id);
    })
    todos = cleanTodos;
    saveTodos();
}

function saveTodos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function paintTodo(text) {
    const li = document.createElement('li');
    const delButton = document.createElement('button');
    delButton.innerText = 'X';
    delButton.addEventListener('click', deleteTodo);

    const span = document.createElement('span');
    const newID = todos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delButton);
    li.id = newID;
    todoList.appendChild(li);
    const todoObj = {
        text: text,
        id : newID
    };
    todos.push(todoObj); 
    saveTodos();
}

function handleSubmit(event) {
    event.preventDefault();
    const todoCurrentValue = todoInput.value;
    paintTodo(todoCurrentValue);
    todoInput.value = '';
}

function loadToDos() {
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if(loadedTodos !== null) {
        const parsedTodos = JSON.parse(loadedTodos);
        // JSON.parse() 메서드는 JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성합니다.
        parsedTodos.forEach(function(todo) {
            paintTodo(todo.text);
        })
    }
}

function init() {
    loadToDos();
    todoForm.addEventListener('submit', handleSubmit);
}

init();