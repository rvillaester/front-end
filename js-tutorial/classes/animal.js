export class Animal {
    constructor(type, name){
        this.type = type;
        this.name = name;
    }

    makeSound(sound){
        console.log(`${name} say ${sound}`);
    }

    get metadata(){
        return `Type is ${type} and Name is ${name}`;
    }

    static printSomething(){
        console.log('This is Animal static method');
    }
}

export class Dog extends Animal{
    constructor(name){
        super('Dog', name);
    }

    makeSound(sound = 'Aw Aw Aw'){
        super().makeSound(sound);
    }
}