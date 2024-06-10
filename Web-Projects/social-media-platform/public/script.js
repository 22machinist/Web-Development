document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const postForm = document.getElementById('post-form');
    const authContainer = document.getElementById('auth-container');
    const postContainer = document.getElementById('post-container');
    const postsDiv = document.getElementById('posts');

    let token = null;

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
            postContainer.style.display = 'block';
            loadPosts();
        } else {
            alert(result.message);
        }
    });

    postForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const content = document.getElementById('post-content').value;

        const response = await fetch('http://localhost:3000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token, content })
        });

        const post = await response.json();
        displayPost(post);
        postForm.reset();
    });

    async function loadPosts() {
        const response = await fetch('http://localhost:3000/api/posts');
        const posts = await response.json();
        postsDiv.innerHTML = '';
        posts.forEach(displayPost);
    }

    function displayPost(post) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <p>${post.content}</p>
            <p><strong>${post.author.username}</strong> - ${new Date(post.date).toLocaleString()}</p>
        `;
        postsDiv.appendChild(postElement);
    }
});
