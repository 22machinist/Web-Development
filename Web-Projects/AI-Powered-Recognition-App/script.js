let model;

async function loadModel() {
    model = await mobilenet.load();
}

async function uploadImage() {
    const fileInput = document.getElementById('fileInput');
    const imageContainer = document.getElementById('imageContainer');
    const output = document.getElementById('output');

    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = async () => {
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
            output.innerHTML = 'Analyzing...';
            const predictions = await model.classify(img);
            output.innerHTML = '';
            predictions.forEach(prediction => {
                output.innerHTML += `<div>${prediction.className}: ${prediction.probability.toFixed(4)}</div>`;
            });
        };
    };
}

loadModel();
