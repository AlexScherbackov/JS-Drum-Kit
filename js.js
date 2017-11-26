'use strict';
var d = document;
const keys = d.querySelectorAll('.key');



function playSound(e){
	const audio = d.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = d.querySelector(`.key[data-key="${e.keyCode}"]`);

	if(!audio) return;

	audio.currentTime = 0;
	audio.play()
	key.classList.add('playing');
}

function removeTransition(e){
	if(e.propertyName != 'transform') return;
	this.classList.remove('playing');
}


keys.forEach(key=> key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);