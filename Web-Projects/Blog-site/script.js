document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('post-form');
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');
    const authorInput = document.getElementById('author');
    const postsContainer = document.getElementById('posts-container');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const newPost = {
            title: titleInput.value,
            content: contentInput.value,
            author: authorInput.value
        };
        await createPost(newPost);
        titleInput.value = '';
        contentInput.value = '';
        authorInput.value = '';
        loadPosts();
    });

    async function loadPosts() {
        const response = await fetch('http://localhost:3000/api/posts');
        const posts = await response.json();
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p class="author">By: ${post.author}</p>
                <p class="date">${new Date(post.date).toLocaleDateString()}</p>
                <button onclick="deletePost('${post._id}')">Delete</button>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    async function createPost(post) {
        await fetch('http://localhost:3000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });
    }

    window.deletePost = async (id) => {
        await fetch(`http://localhost:3000/api/posts/${id}`, {
            method: 'DELETE'
        });
        loadPosts();
    };

    loadPosts();
});
