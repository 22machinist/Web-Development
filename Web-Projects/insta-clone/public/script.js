document.getElementById('uploadForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', document.getElementById('photo').files[0]);

    const response = await fetch('/upload', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    displayPhoto(result.filePath);
});

function displayPhoto(filePath) {
    const img = document.createElement('img');
    img.src = filePath;
    document.getElementById('gallery').appendChild(img);
}
