
function playSound (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stops the function from runnning all together
    audio.currentTime = 0; //rewind sound to the start
    audio.play();
  key.classList.add('playing'); // this adds the classList 'playing' so that we can use the css styling
  key.classList.add('playing')
};

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //skip it if its not a transform
  this.classList.remove('playing');
}

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // we can't do eventlistener for 'transitionend' here. When you have an array of elements you can't listen on all of them. You have to explicity loop over each element one and attach an even listener to each

window.addEventListener("keydown", playSound);

