const p = new Promise((resolve,reject) => {
    resolve("promise Resolved Value ");
})

// always returns a promise
async function getData(){
    return `hellow guys chai pilo you are my best do not apply logic `;
}

const data = getData();
console.log(data);


const dataPromise = getData();

dataPromise.then(res => console.log(res))

