document.getElementById('downloadButton').addEventListener('click', () => {
    const url = document.getElementById('url').value;
    if (url) {
        window.location.href = `/download?url=${encodeURIComponent(url)}`;
    } else {
        alert('Please enter a valid YouTube URL.');
    }
});
