const dropzone = document.getElementById('dropzone');

dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
});

dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('dragover');
});

dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');

    const files = e.dataTransfer.files;

    for (const file of files) {
        if (file.type.startsWith('image/')) {
            // Handle image upload
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            dropzone.appendChild(img);
        } else if (file.type.startsWith('video/')) {
            // Handle video upload
            const video = document.createElement('video');
            video.src = URL.createObjectURL(file);
            video.controls = true;
            dropzone.appendChild(video);
        } else if (file.type.startsWith('text/')) {
            // Handle text upload
            const reader = new FileReader();
            reader.onload = (event) => {
                const text = document.createElement('p');
                text.textContent = event.target.result;
                dropzone.appendChild(text);
            };
            reader.readAsText(file);
        }
    }
});


const mediaUploadInput = document.getElementById('media-upload');
const uploadButton = document.getElementById('upload-button');
const mediaList = document.getElementById('media-list');

uploadButton.addEventListener('click', () => {
    mediaUploadInput.click();
});

mediaUploadInput.addEventListener('change', () => {
    const files = mediaUploadInput.files;

    for (const file of files) {
        if (file.type.startsWith('image/')) {
            // Handle image upload
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            mediaList.appendChild(img);
        } else if (file.type.startsWith('video/')) {
            // Handle video upload
            const video = document.createElement('video');
            video.src = URL.createObjectURL(file);
            video.controls = true;
            mediaList.appendChild(video);
        }
    }
});
