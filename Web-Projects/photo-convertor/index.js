document.getElementById('convert').addEventListener('click', async () => {
    const fileInput = document.getElementById('upload');
    const originalImage = document.getElementById('original');
    const colorizedImage = document.getElementById('colorized');
    const resultDiv = document.getElementById('result');

    if (fileInput.files.length === 0) {
        alert('Please upload an image file.');
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('image', file);

    originalImage.src = URL.createObjectURL(file);
    resultDiv.style.display = 'block';

    try {
        const response = await fetch('https://api.deepai.org/api/colorizer', {
            method: 'POST',
            headers: {
                'Api-Key': 'YOUR_API_KEY_HERE'  // Replace with your DeepAI API key
            },
            body: formData
        });
        const data = await response.json();
        colorizedImage.src = data.output_url;
    } catch (error) {
        alert('Error in colorizing image. Please try again.');
        console.error(error);
    }
});
