
const bug = document.querySelector('.ladybird');

let rotation = 0;
let xPos = 0;
let yPos = 0;

const setTransform = () => {
  bug.style.left = `${xPos}px`;
  bug.style.top = `${yPos}px`;
};



const upBtn = document.querySelector('#up');
const stepUp = () => {
  yPos > 0 && (yPos += -10);
  setTransform();
};
upBtn.addEventListener('click', stepUp);



const downBtn = document.querySelector('#down');
const stepDown = () => {
  yPos < 450 && (yPos += 10);
  setTransform();
};
downBtn.addEventListener('click', stepDown);



const rightBtn = document.querySelector('#right');
const stepRight = () => {
  xPos < 450 && (xPos += 10);
  setTransform();
};
rightBtn.addEventListener('click', stepRight);



const leftBtn = document.querySelector('#left');
const stepLeft = () => {
  xPos > 0 && (xPos += -10);
  setTransform();
};
leftBtn.addEventListener('click', stepLeft);



const homeBtn = document.querySelector('#home');
const home = () => {
  yPos = 0;
  xPos = 0;
  setTransform();
};
homeBtn.addEventListener('click', home);



const turnClockWiseBtn = document.querySelector('#turnClockWise');
const turnClockWise = () => {
  rotation += 90;
  bug.style.transform = `rotate(${rotation}deg)`;
};
turnClockWiseBtn.addEventListener('click', turnClockWise);



const turnAntiClockWiseBtn = document.querySelector('#turnAntiClockWise');
const turnAntiClockWise = () => {
  rotation += -90;
  bug.style.transform = `rotate(${rotation}deg)`;
};
turnAntiClockWiseBtn.addEventListener('click', turnAntiClockWise);


// .