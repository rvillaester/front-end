function oldFunc(text){
    console.log(`Old way ${text}`);
}

const arrowFunc = (text) => {
    console.log(`New way ${text}`);
}

oldFunc('Albert')
arrowFunc('Rey')

const sum = (...nums) => {
    let total = nums.reduce((x,y) => x+y);
    console.log(`Total is ${total}`);
}

sum(1,2,3,4,5);