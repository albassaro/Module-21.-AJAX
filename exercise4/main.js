
const promiseObj = new Promise ((resolve,reject) => {
    let randNumber = Math.floor(Math.random() * 100) + 1;
    setTimeout(() => {
        if (randNumber%2 === 0){
            resolve(randNumber);
        }else{
            reject(randNumber);
        }
    }, 3000)
    
});

promiseObj
.then((result) => {
    console.log("Завершено успешно. Сгенерированное число —", result);
})

.catch((result) => {
    console.log("Завершено с ошибкой. Сгенерированное число —", result);
});







