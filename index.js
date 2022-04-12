console.log("Before");
getUser(1, getRepositories);
console.log("After");

function getRepositories(user) {
  getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(gitHubUsername) {
  getCommits(repo, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

// Promises
// Async/await

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    callback({ id: id, gitHubUsername: "motswanax" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling GitHub API...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
