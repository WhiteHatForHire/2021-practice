// Init Github
const github = new Github;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText!== ''){
    // console.log(userText);
    // Make http call
    github.getUser(userText)
      .then(data => {
        // console.log(data.profile.name);
        if(data.profile.message === 'Not Found') {
          // Show alert
        } else {
          // Show profile
        }
      })
  }
});