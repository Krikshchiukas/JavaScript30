



 function playSound(e) {
   //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //console.log(audio);
    if (!audio) return; //stop the function from running all together
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');
    //console.log(key);
};

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if's not a transform
   // console.log(e.propertyName);
  // console.log(this); //to check to what 'this' is refering
  this.classList.remove('playing');   
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);