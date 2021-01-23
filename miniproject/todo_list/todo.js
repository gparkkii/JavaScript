const form = document.querySelector('#form'),
      input = form.querySelector('#task'),
      add = form.querySelector('#add'),
      todos = document.querySelector('#todos'),
      clear = document.querySelector('.clear');

const TODOS_LS = 'todos';
let todosValue = [];

function inputTask(event) {
    event.preventDefault;
    if(todosValue.length > 9) {
        alert('Full of Schedule')
    } else if(input.value === '') {
        alert('Input your tasks!');
    } else { 
        let condition = true;
        todosValue.forEach(function(items) {
            if(input.value === items.text) {
                alert('You already have same task.');
                condition = false;
            }
        })
        if(condition) {
            const currentValue = input.value;
            displayTodo(currentValue,'none');
        }
    }
    input.value = '';
}

function displayTodo(currentValue,currentStyle) {
    const li = document.createElement('li'),
          delButton = document.createElement('button'),
          checkButton = document.createElement('button'),
          editButton = document.createElement('button'),
          paragraph = document.createElement('p'),
          newID = todosValue.length + 1;

    checkButton.innerHTML = '<span class="material-icons check">'+ 'done' + '</span>'
    checkButton.addEventListener('click', checkTodo);
    editButton.innerHTML = '<span class="material-icons edit">'+ 'playlist_add' + '</span>'
    editButton.addEventListener('click', editTodo);
    delButton.innerHTML = '<span class="material-icons cancel">'+ 'clear' + '</span>';
    delButton.addEventListener('click', deleteTodo);

    const colorList = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#277da1', '#3a0ca3', '#7209b7', '#5f0f40', '#22223b'] 

    paragraph.innerHTML = `${newID}. ${currentValue}`;
    paragraph.style.textDecoration = currentStyle;
    paragraph.style.borderLeft = `6px solid ${colorList[newID]}`;

    li.appendChild(paragraph);
    li.appendChild(delButton);
    li.appendChild(editButton);
    li.appendChild(checkButton);
    li.id = newID;
    li.className = 'clearfix';
    todos.appendChild(li);
    const todoObj = {
        text: currentValue,
        id : newID,
        textDecoration : currentStyle
    };
    todosValue.push(todoObj); 
    saveTodos();
}

function editTodo(event) {
    const span = event.target,
          button = span.parentNode,
          li = button.parentNode,
          addText = li.querySelector('p');

    if(input.value === '') {
        input.value = addText.textContent;
        todos.removeChild(li);
        console.log(li);
        const cleanTodos = todosValue.filter(function(todo) {
            return todo.id !== parseInt(li.id);
        })
        todosValue = cleanTodos;
        saveTodos();
    } else {
        alert('Finish your edit!');
    }
}

function checkTodo(event) {
    const span = event.target,
          button = span.parentNode,
          li = button.parentNode,
          addTextStyle = li.querySelector('p');
    if(input.value === '') {
        if(addTextStyle.style.textDecoration === 'none') {
            addTextStyle.style.textDecoration = 'line-through';
            let newValue = todosValue[(li.id) - 1];
            console.log(newValue);
            newValue.textDecoration = 'line-through';
        } else {
            addTextStyle.style.textDecoration = 'none';
            let newValue = todosValue[(li.id) - 1];
            console.log(newValue);
            newValue.textDecoration = 'none';
        } 
        saveTodos();
    } else {
        alert('Finish your edit!');
    }
}

function deleteTodo(event) {
    const span = event.target,
          button = span.parentNode,
          li = button.parentNode;

    if(input.value === '') {
        todos.removeChild(li);
        console.log(li);
        const cleanTodos = todosValue.filter(function(todo) {
            return todo.id !== parseInt(li.id);
        })
        todosValue = cleanTodos;
        saveTodos(); 
    } else {
        alert('Finish your edit!');
    }
    showHideButton();
}

function saveTodos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(todosValue));
}


function loadToDos() {
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if(loadedTodos !== null) {
        const parsedTodos = JSON.parse(loadedTodos);
        // JSON.parse() 메서드는 JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성합니다.
        parsedTodos.forEach(function(todo) {
            displayTodo(todo.text,todo.textDecoration,todo.color);
        })
    }
}

function showHideButton() {
    if(todosValue.length === 0) {
        clear.className = 'hidden clear';
    } else {
        clear.className = 'show clear';
    }
};

function clearAll(event) {
    const button = event.target;
    if(input.value === '') {
        while(todos.hasChildNodes('li')) {
            todos.removeChild(todos.firstChild);
        }
        todosValue = [];
        saveTodos();
    } else {
        alert('Finish your edit!')
    }
    showHideButton();
}

function init() {
    loadToDos();
    showHideButton();
    form.addEventListener('submit',inputTask);
    clear.addEventListener('click',clearAll);
    input.focus();
}

init();