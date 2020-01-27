console.log('Before');
//const user = getUser(1);
/*
getUser(1, (user)=>{
    console.log('User',user);
    const {gitHubUserName} = user;
    getRepos(gitHubUserName, (repos)=>{
        console.log('Repos',repos)
    })
});*/

getUser(1, userRepos);

console.log('After');

function userRepos(user){
    console.log('User',user);
    getRepos(user.gitHubUserName, displayRepos);
}

function displayRepos(repos){
    console.log('Repos',repos);
    getCommits(repos[0],displayCommits);
}

function getCommits(repo, callback){
    console.log('Getting comments for repo',repo,'...');
    callback(['commit1','commit2']);
}

function displayCommits(commits){
    console.log(commits);
}

function getUser(id, callback){
    setTimeout(() =>{
        console.log('Reading a user from the database...');
        callback({ id: id, gitHubUserName: "mosh"});
    }, 2000);
    return 1;
}

function getRepos(username, callback){
    setTimeout(()=>{
        console.log('Reading repos for',username,'from the database...');
        callback(['repo1','repo2','repo3' ]);
    }, 2000)
}