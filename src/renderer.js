import { animate } from './sprites/animator.js';
import { home } from './modes/home.js';
import { dressup } from './modes/dressup.js';
import { stopAnimation } from './sprites/animator.js';

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('homeButton').addEventListener('click', () => setGameMode('home'));
    document.getElementById('dressupButton').addEventListener('click', () => setGameMode('dressup'));
    const spriteSheet = document.getElementById('spriteSheet');
    if (spriteSheet.complete) {
        animate();
    } else {
        spriteSheet.onload = () => {
            animate();
        }
    }
});

// Add this function to handle mode switching
window.setGameMode = function(mode) {
    const gameDiv = document.getElementById('game');
    stopAnimation();
    gameDiv.innerHTML = '';
    if (mode === 'home') {
        home(gameDiv);
    } else if (mode === 'dressup') {
        dressup(gameDiv);
    }
}
