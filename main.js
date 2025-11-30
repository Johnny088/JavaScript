console.log('hello');
const gitHubUsers = 'https://api.github.com/users';
const avaImg = document.getElementById('avatar-img');
const inputForm = document.getElementById('input__form');
const getBtn = document.getElementById('get_info');
const userName = document.getElementById('user');
const regionName = document.getElementById('region');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
getBtn.onclick = () => {
  console.log(inputForm.value);
  showGitHubUserAvatar(inputForm.value);
};

// ------------------------------
async function showGitHubUserAvatar(login) {
  console.log(`login: ${login}`);
  userName.innerHTML = login;
  const response = await fetch(gitHubUsers + '/' + login);
  const result = await response.json();
  regionName.innerHTML = result.location;
  followers.innerHTML = result.followers;
  following.innerHTML = result.following;
  console.log(result.avatar_url);
  avaImg.src = result.avatar_url;
}
