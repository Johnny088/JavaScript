console.log('hello');
const gitHubUsers = 'https://api.github.com/users';
const avaImg = document.getElementById('avatar-img');
const inputForm = document.getElementById('input__form');
const getBtn = document.getElementById('get_info');
const userName = document.getElementById('user');
const regionName = document.getElementById('region');
const followers = document.getElementById('followers');
getBtn.onclick = () => {
  console.log(inputForm.value);
  showGitHubUserAvatar(inputForm.value);
};

// ------------------------------
async function showGitHubUserAvatar(login) {
  console.log(`login: ${login}`);
  userName.innerHTML = 'user name:\t' + login;
  const response = await fetch(gitHubUsers + '/' + login);
  const result = await response.json();
  regionName.innerHTML = 'region:\t' + result.location;
  console.log(result.avatar_url);
  avaImg.src = result.avatar_url;
}
