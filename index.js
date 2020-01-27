console.log('Before');

getUser(1)
    .then(u=>userRepos(u.gitHubUserName))
    .then(r=>displayRepos(r))
    .then(c=>displayCommits(c))
    .catch(err => console.log('Error:',err.message));

console.log('After');

function userRepos(user){
    console.log('User',user);
    return getRepos(user);
}

function displayRepos(repos){
    console.log('Repos',repos);
    return getCommits(repos[0],displayCommits);
}

function getCommits(repo){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            console.log('Getting comments for repo',repo,'...');
            resolve(['commit']);
        }, 1000);
    })
}

function displayCommits(commits){
    console.log(commits);
}

function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            console.log('Reading a user from the database...');
            resolve({ id: id, gitHubUserName: "mosh"});
        }, 1000);
    })
}

function getRepos(username){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Reading repos for',username,'from the database...');
        resolve(['repo1','repo2','repo3' ]);
    }, 1000)
})
}