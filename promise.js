
const p = new Promise((resolve, reject)=>{
    //begin async work
    //...
    setTimeout(()=>{
        resolve(1);
        reject(new Error('message'));
    },1000);
})

p.then(result => console.log('Result:',result))
.catch(err => console.log('Error:',err.message));
