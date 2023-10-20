import { getNews, getNewsBackup } from './api/index';
// Write your code here...

const newsListEl = document.querySelector('#newsList');
const getNewsBtn = document.querySelector('#getNewsBtn');
const spinner = document.querySelector('#spinner');
const errorEl = document.querySelector('#error');
const sourceEl = document.querySelector('#source');

const handleSuccess = function (news, source) {
  errorEl.style.display = 'none';
  const listElems = news.map((el) => `<li>${el.content}</li>`).join('');
  newsListEl.innerHTML = listElems;
  sourceEl.innerText = `Source: ${source}`;
  sourceEl.style.display = 'inline-block';
};

const handleError = function () {
  errorEl.style.display = 'block';
};

// Promises
const getNewsPromise = () => {
  new Promise((resolve, reject) => {
    getNews((error, news, source) => {
      if (error) return reject();
      resolve([news, source]);
    });
  });
}

const getNewsBackupPromise = () => {
  new Promise((resolve, reject) => {
    getNewsBackup((error, news, source) => {
      if (error) return reject();
      resolve([news, source]);
    });
  });
}

getNewsBtn.addEventListener('click', function () {
  newsListEl.innerHTML = '';
  spinner.style.display = 'block';
  sourceEl.style.display = 'none';

  // Using Callbacks
  getNews((error, news, source) => {
    if (error) return handleError();
    handleSuccess(news, source);

    spinner.style.display = 'none';
  });

  
  // Basic Promises

  getNewsPromise()
    .then(([news, source]) => {
      handleSuccess(news, source);
    })
    .catch(() => {
      handleError();
    })
    .finally(() => {
      spinner.style.display = 'none';
    });

  // Resilient Edition
  Promise.any([getNewsPromise(), getNewsBackupPromise()])
    .then(([news, source]) => {
      handleSuccess(news, source);
    })
    .catch(() => {
      handleError();
    })
    .finally(() => {
      spinner.style.display = 'none';
    });
});
