const computeSum = (...nums) => {
    let total = 0;
    for (const num of nums){
        total += num;
    }
    return  total;
}
let sum = computeSum(1,2,3,4);
console.log(`The sum is ${sum}`)