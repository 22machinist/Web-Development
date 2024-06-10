document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const projectForm = document.getElementById('project-form');
    const taskForm = document.getElementById('task-form');
    const authContainer = document.getElementById('auth-container');
    const projectContainer = document.getElementById('project-container');
    const taskContainer = document.getElementById('task-container');
    const projectsDiv = document.getElementById('projects');
    const tasksDiv = document.getElementById('tasks');

    let token = null;
    let selectedProjectId = null;

    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();
        alert(result.message);
    });

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();
        if (response.ok) {
            token = result.token;
            authContainer.style.display = 'none';
            projectContainer.style.display = 'block';
            loadProjects();
        } else {
            alert(result.message);
        }
    });

    projectForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = document.getElementById('project-name').value;
        const description = document.getElementById('project-description').value;

        const response = await fetch('http://localhost:3000/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token, name, description })
        });

        const project = await response.json();
        displayProject(project);
        projectForm.reset();
    });

    projectForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = document.getElementById('project-name').value;
        const description = document.getElementById('project-description').value;

        const response = await fetch('http://localhost:3000/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token, name, description })
        });

        const project = await response.json();
        displayProject(project);
        projectForm.reset();
    });

    taskForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = document.getElementById('task-name').value;
        const description = document.getElementById('task-description').value;

        const response = await fetch('http://localhost:3000/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token, name, description, projectId: selectedProjectId })
        });

        const task = await response.json();
        displayTask(task);
        taskForm.reset();
    });

    async function loadProjects() {
        const response = await fetch('http://localhost:3000/api/projects');
        const projects = await response.json();
        projectsDiv.innerHTML = '';
        projects.forEach(displayProject);
    }

    function displayProject(project) {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <button onclick="selectProject('${project._id}')">View Tasks</button>
        `;
        projectsDiv.appendChild(projectElement);
    }

    async function selectProject(projectId) {
        selectedProjectId = projectId;
        const response = await fetch(`http://localhost:3000/api/projects/${projectId}`);
        const project = await response.json();
        tasksDiv.innerHTML = '';
        project.tasks.forEach(displayTask);
        projectContainer.style.display = 'none';
        taskContainer.style.display = 'block';
    }

    function displayTask(task) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <h4>${task.name}</h4>
            <p>${task.description}</p>
            <p>Status: ${task.status}</p>
        `;
        tasksDiv.appendChild(taskElement);
    }
});
