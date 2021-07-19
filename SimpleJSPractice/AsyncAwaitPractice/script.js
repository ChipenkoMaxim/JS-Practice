async function loadJson(url) {
  const response = await fetch(url);

  if (response.status === 200) {
    const user = await response.json();
    return user;
  }

  throw new Error(response.status);
}

loadJson('no-such-user.json')
  .catch(console.log);

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson1(url) {
  const response = fetch(url);

  if (response.status === 200) {
    const data = await response.json();
    return data;
  }

  throw new HttpError(response);
}

async function demoGithubUser() {
  let user;
  while (true) {
    const name = 'iliakan';

    try {
      user = await loadJson1(`https://api.github.com/users/${name}`);
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status === 404) {
        console.log('User not found, try again');
      }
      throw err;
    }
  }

  console.log(`Full name ${user.name}`);
  return user;
}

demoGithubUser();

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

async function f() {
  wait().then((value) => console.log(value));
}

f();
