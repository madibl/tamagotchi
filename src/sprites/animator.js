const frameWidth = 128;
const frameHeight = 128;
const numFrames = 5;
let currentFrame = 0;
let animationTimerId = null;

export function drawFrame() {
    const canvas = document.getElementById('spriteCanvas');
    const ctx = canvas.getContext('2d');
    const spriteSheet = document.getElementById('spriteSheet');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        spriteSheet,
        0, currentFrame * frameHeight,
        frameWidth, frameHeight,
        0, 0,
        canvas.width, canvas.height
    );
    
}

export function animate() {
    drawFrame();
    currentFrame = (currentFrame + 1) % numFrames;
    animationTimerId = setTimeout(animate, 200);
}

export function stopAnimation() {
    if (animationTimerId) {
        clearTimeout(animationTimerId);
        animationTimerId = null;
    }
}

