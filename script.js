function addTodo() {
    var todoInput = document.getElementById('todo-input');
    var todoText = todoInput.value.trim();
    
    if (todoText !== "") {
        var todoList = document.getElementById('todo-list');

        var li = document.createElement('li');

        var span = document.createElement('span');
        span.textContent = todoText;

        var time = document.createElement('span');
        time.classList.add('time');
        time.textContent = new Date().toLocaleTimeString();

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            todoList.removeChild(li);
        };

        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.onclick = function() {
            var newTodoText = prompt("Edit task:", span.textContent);
            if (newTodoText !== null && newTodoText.trim() !== "") {
                span.textContent = newTodoText.trim();
            }
        };

        li.appendChild(span);
        li.appendChild(time);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);

        todoInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}
