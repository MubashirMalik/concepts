async function sleep(ms) {
    return new Promise(resolve => setTimeout(() => { 
        console.log('I work in background even after my caller/parent has returned!'); 
        resolve(); 
    }, ms)) 
}

async function anotherMethod() {
    sleep(3000)
    console.log('anotherMethod returning')
}

async function main() {
    await anotherMethod()
    console.log('Last Line!')
}

main()
