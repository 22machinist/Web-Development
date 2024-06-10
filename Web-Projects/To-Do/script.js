document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask(input.value);
        input.value = '';
    });

    function addTask(task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });

        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
    }
});
