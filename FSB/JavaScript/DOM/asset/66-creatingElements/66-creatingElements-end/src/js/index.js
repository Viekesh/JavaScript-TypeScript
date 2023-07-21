const createPost = function ({ title, content }) {
  const socialCard = document.createElement('div');
  socialCard.setAttribute('class', 'social-card');

  const icon = document.createElement('div');
  icon.setAttribute('class', 'post-icon');

  const postTitle = document.createElement('div');
  postTitle.setAttribute('class', 'post-title');

  const postUser = document.createElement('div');
  postUser.setAttribute('class', 'post-user');

  const postContent = document.createElement('div');
  postContent.setAttribute('class', 'post-content');

  socialCard.append(icon, postTitle, postUser, postContent);

  // Adding Content
  postTitle.innerText = title;
  postUser.innerText = 'Joe Mockery';
  postContent.innerText = content;

  document.body.prepend(socialCard);
};

createPost({
  title: 'Midnight Sun',
  content: `Oh man, last month I was in Sweden and I witnessed the midnight sun. It was a surreal experience to see sunlight at 2 in the morning! Couldn't sleep at all, but felt fresh!`,
});

createPost({
  title: 'Working with JavaScript',
  content: `It's been almost 10 years since I started working with JavaScript and it's awesome to see it grow to a mature and loved language. Kudos JS!`,
});

createPost({
  title: 'Selling my Honda Civic',
  content: `Guys, I'm selling my old Honda Civic automatic. Anyone interested, please call me/DM me`,
});
