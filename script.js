"use strict";
const urls = [
    './banner.png',
];
function loadImage(url) {
    const image = new Image();
    return new Promise((resolve) => {
        image.onload = () => resolve(image);
        image.crossOrigin = 'Anonymous';
        image.src = url;
    });
}
document.addEventListener('DOMContentLoaded', async () => {
    const canvas = document.getElementById('buffer');
    const context = canvas.getContext('2d');
    const { width, height } = canvas;
    const { backgroundColor } = getComputedStyle(document.body);
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, width, height);
    const images = await Promise.all(urls.map(loadImage));
    let currentImageIndex = 0;
    const drawCurrentImage = () => {
        context.fillRect(0, 0, width, height);
        context.drawImage(images[currentImageIndex], 0, 0);
    };
    
    setInterval(() => {
        console.log("interval ok")
        currentImageIndex = (currentImageIndex + 1) % images.length;
        drawCurrentImage();
    }, 3000);
    drawCurrentImage();
});
