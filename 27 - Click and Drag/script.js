const SLIDER = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

SLIDER.addEventListener('mousedown', (e) => {
  isDown = true;
  SLIDER.classList.add('active');
  startX = e.pageX - SLIDER.offsetLeft;
  scrollLeft = SLIDER.scrollLeft;
 // console.log(e.pageX);
});

SLIDER.addEventListener('mouseleave', () => {
    isDown = false;
    SLIDER.classList.remove('active');
});

SLIDER.addEventListener('mouseup', () => {
    isDown = false;
    SLIDER.classList.remove('active');
});

SLIDER.addEventListener('mousemove', (e) => {
    if(!isDown) return; //stop the fn from running
    e.preventDefault();
    const x = e.pageX - SLIDER.offsetLeft;
    const WALK = (x - startX) * 4;
    SLIDER.scrollLeft = scrollLeft - WALK;
   // console.log(WALK);
 // console.log(isDown);
 // console.log(startX);
  
});