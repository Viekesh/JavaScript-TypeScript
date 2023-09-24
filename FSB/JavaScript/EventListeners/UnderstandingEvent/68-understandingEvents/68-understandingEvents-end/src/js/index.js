const greeting = document.querySelector('#greeting');



const morningBtn = document.querySelector('#morning');
morningBtn.addEventListener(
  'click',
  () => (greeting.innerText = 'Good Morning!')
);



const dayBtn = document.querySelector('#day');
dayBtn.addEventListener(
  'click',
  () => (greeting.innerText = 'Good Day!')
);



const afternoonBtn = document.querySelector('#afternoon');
afternoonBtn.addEventListener(
  'click',
  () => (greeting.innerText = 'Good Afternoon!')
);



const eveningBtn = document.querySelector('#evening');
eveningBtn.addEventListener(
  'click',
  () => (greeting.innerText = 'Good Evening!')
);



const nightBtn = document.querySelector('#night');

nightBtn.addEventListener(
  'click',
  () => (greeting.innerText = 'Good Night...')
);



