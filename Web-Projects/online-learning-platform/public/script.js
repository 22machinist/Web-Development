document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const courseForm = document.getElementById('course-form');
    const lessonForm = document.getElementById('lesson-form');
    const authContainer = document.getElementById('auth-container');
    const courseContainer = document.getElementById('course-container');
    const lessonContainer = document.getElementById('lesson-container');
    const coursesDiv = document.getElementById('courses');
    const lessonsDiv = document.getElementById('lessons');

    let token = null;
    let selectedCourseId = null;

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
            courseContainer.style.display = 'block';
            loadCourses();
        } else {
            alert(result.message);
        }
    });

    courseForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const title = document.getElementById('course-title').value;
        const description = document.getElementById('course-description').value;

        const response = await fetch('http://localhost:3000/api/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token, title, description })
        });

        const course = await response.json();
        displayCourse(course);
        courseForm.reset();
    });

    lessonForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const title = document.getElementById('lesson-title').value;
        const content = document.getElementById('lesson-content').value;

        const response = await fetch('http://localhost:3000/api/lessons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token, title, content, courseId: selectedCourseId })
        });

        const lesson = await response.json();
        displayLesson(lesson);
        lessonForm.reset();
    });

    async function loadCourses() {
        const response = await fetch('http://localhost:3000/api/courses');
        const courses = await response.json();
        coursesDiv.innerHTML = '';
        courses.forEach(displayCourse);
    }

    function displayCourse(course) {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');
        courseElement.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <button onclick="selectCourse('${course._id}')">View Lessons</button>
        `;
        coursesDiv.appendChild(courseElement);
    }

    async function selectCourse(courseId) {
        selectedCourseId = courseId;
        const response = await fetch(`http://localhost:3000/api/courses/${courseId}`);
        const course = await response.json();
        lessonsDiv.innerHTML = '';
        course.lessons.forEach(displayLesson);
        courseContainer.style.display = 'none';
        lessonContainer.style.display = 'block';
    }

    function displayLesson(lesson) {
        const lessonElement = document.createElement('div');
        lessonElement.classList.add('lesson');
        lessonElement.innerHTML = `
            <h4>${lesson.title}</h4>
            <p>${lesson.content}</p>
        `;
        lessonsDiv.appendChild(lessonElement);
    }
});
