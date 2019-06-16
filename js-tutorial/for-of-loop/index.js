function loopNum(){
    let numbers = [2, 500, 750, 5, 10];
    let total = 0;
    for(const num of numbers){
        total += num;
    }
    console.log(`Total is ${total}`);
}

const loopStr = () => {
    let name = 'Rey';
    for(const letter of name){
        console.log(`${letter}`);
    }
}

loopNum();
loopStr();