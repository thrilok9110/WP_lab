const mypromise = new Promise((resolve,reject)=>{
    resolve("Promise Resolved successfully!");
});

mypromise.then((message) => {
    console.log(message);
});