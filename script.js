const promise1 = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve("Promise 1 resolved")
  }, 2000);
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(function(){
    reject("Promise 2 rejected")
  }, 5000);
})

promise1.then(result => console.log(result));

Promise.all([promise1, promise2])
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('Always executed'))