// Write your code here...
import { getMessages, getComments } from '../api';
import { renderContent, prefixDate } from '../utils';
const messagesContainer = document.querySelector('#messages');
const getMessageBtn = document.querySelector('#getMessages');
const spinner = document.querySelector('#spinner');
const errorEl = document.querySelector('#error');

getMessageBtn.addEventListener('click', async () => {
  spinner.style.display = 'block';
  messagesContainer.innerHTML = '';
  error.innerText = '';
  // Fetch Messages
  // Fetch Comments
  try {
    const messages = await getMessages();
    const updatedMessages = await prefixDate(messages);
    const comments = await getComments();
    renderContent(updatedMessages, comments, messagesContainer);
  } catch (error) {
    errorEl.innerText = `Error: ${error}`;
  }

  spinner.style.display = 'none';
});
