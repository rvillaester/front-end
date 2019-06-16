const hoist = () => {
    if(false){
        var num = 2;
    }
    console.log(`Hoist ${num}`);
}
hoist();

const blockScope = () => {
    if(false){
        let num = 2;
    }
    console.log(`Block Scope ${num}`);
}
blockScope();