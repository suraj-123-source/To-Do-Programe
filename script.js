document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value;

    if (taskValue) {
        const li = document.createElement('li');
        li.textContent = taskValue;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove';
        removeButton.onclick = function() {
            li.remove();
        };

        li.appendChild(removeButton);
        li.onclick = function() {
            li.classList.toggle('completed');
        };

        document.getElementById('task-list').appendChild(li);
        taskInput.value = '';
    }
});