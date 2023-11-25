const inputTodo = document.querySelector('.input-todo');
const addBtn = document.querySelector('.add-btn');
const todoList = document.querySelector('.todo-list');
var i=0;

function inputTodoValue(e) {
    if(e.keyCode == 13) {
        clickAddBtn();
    }
}

function clickAddBtn() {
    if(inputTodo.value !== "") {
        var todo = document.createElement('li');
        todo.classList.add('todo');
        todo.innerHTML = 
        `
            <div class="todo-content">
                <input type="checkbox" name="done${i}" id="done${i}">
                <label for="done${i}"></label>
                <label for="done${i}">${inputTodo.value}</label>
            </div>
            <button class="delete-btn" onclick="clickDeleteBtn(event)"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
        `
        todoList.appendChild(todo);
        i++;
        inputTodo.value = null;
    } else {
        alert('할 일을 입력하세요.')
    }
    howManyTask();
}

function clickDeleteBtn(event) {
    event.target.parentNode.parentNode.remove();
    howManyTask();
}

function howManyTask() {
    const task = document.querySelector('.task');
    task.innerHTML = `할 일 : ${todoList.childElementCount} 개`
}
howManyTask();

function clickDeleteAllBtn() {
    const todoContent = document.querySelectorAll('.todo');
    for(var k=0; k<todoContent.length; k++) {
        todoContent[k].remove();
    }
    howManyTask();
}