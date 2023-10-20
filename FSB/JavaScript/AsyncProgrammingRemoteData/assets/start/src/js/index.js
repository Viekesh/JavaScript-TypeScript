// Write your code here...
const showGreetingBtn = document.querySelector('#showGreetingBtn');
const toggleBtn = document.querySelector('#toggleBtn');
const title = document.querySelector('#title');

const showGreetingHandler = function () {
  title.innerText = 'Please wait...';
  title.innerText = 'Greetings from a Slow Function!';
};

showGreetingBtn.addEventListener('click', showGreetingHandler);

const toggleLabelHandler = function (evt) {
  evt.target.innerText === 'Off' ? (evt.target.innerText = 'On') : (evt.target.innerText = 'Off');
};

toggleBtn.addEventListener('click', toggleLabelHandler);
