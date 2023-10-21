// Write your code here...
const showGreetingBtn = document.querySelector('#showGreetingBtn');
const toggleBtn = document.querySelector('#toggleBtn');
const title = document.querySelector('#title');

const showResult = function () {
  title.innerText = 'Please wait...';
  for (let i = 0; i < 3; i++) {}
  title.innerText = 'Greetings from a slow function!';
  // setTimeout(function () {
  //   for (let i = 0; i < 10000000000; i++) {}
  //   title.innerText = 'Greetings from a slow function!';
  // }, 0);
};

const toggleLabel = function (evt) {
  evt.target.innerText === 'Off' ? (evt.target.innerText = 'On') : (evt.target.innerText = 'Off');
};

showGreetingBtn.addEventListener('click', showResult);
toggleBtn.addEventListener('click', toggleLabel);
