import { animate } from '../sprites/animator.js';

export function home(gameDiv) {
    gameDiv.innerHTML = `
        <p>Welcome home!</p>
        <canvas id="spriteCanvas" width="128" height="128"></canvas>
        <img id="spriteSheet" src="assets/ebic.png">
    `;
    const spriteSheet = document.getElementById('spriteSheet');
    if (spriteSheet.complete) {
        animate();
    } else {
        spriteSheet.onload = animate;
    }
}
