// Write your code here...
import { getMessages, getComments } from '../api';
import { renderContent } from '../utils';
const messagesContainer = document.querySelector('#messages');
const getMessageBtn = document.querySelector('#getMessages');
const spinner = document.querySelector('#spinner');
const errorEl = document.querySelector('#error');

getMessageBtn.addEventListener('click', () => {
  spinner.style.display = 'block';
  messagesContainer.innerHTML = '';
  errorEl.innerText = '';
  // Fetch Messages
  // Fetch Comments
  // Render Messages + Comments
  // Hide the spinner
  Promise.all([getMessages(), getComments()])
    .then(([messages, comments]) => renderContent(messages, comments, messagesContainer))
    .catch((error) => (errorEl.innerText = `Error: ${error}`))
    .finally(() => {
      spinner.style.display = 'none';
    });
});
