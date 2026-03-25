
async function run() {
    console.log("Start");
    const result = await waitTwoSeconds(); 
    console.log(result);
    console.log("End");
}

function waitTwoSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Done"),2000);
    });
}
run();
