import { animate } from '../sprites/animator.js';

export function dressup(gameDiv) {
    gameDiv.innerHTML = `
    <p>Dress up your Tamagotchi!</p>
    <canvas id="spriteCanvas" width="128" height="128"></canvas>
    <img id="spriteSheet" src="assets/ebic.png">`;

    const spriteSheet = document.getElementById('spriteSheet');
    if (spriteSheet.complete) {
        animate();
    } else {
        spriteSheet.onload = animate;
    }
}
