/*
//Promise.resolve({id:1})
Promise.reject(Error('Message'))
.then(u=>console.log(u))
.catch(e=>console.log(e));*/

const p1=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Async op 1');
        //resolve(1)
        reject(new Error('Because something failed'))
    },1000);
})

const p2=new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Async op 2');
        resolve(2)
    },1000);
})

//Promise.all([p1,p2])
Promise.race([p1,p2])
    .then(result=>console.log(result))
    .catch(e=>console.log(e));