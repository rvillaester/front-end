function oldNameBuilder (firstname, lastname){
    const newName = {firstname: firstname, lastname: lastname};
    console.log(newName);
}

const newNameBuilder = (firstname, lastname) => {
    const newName = {firstname, lastname};
    console.log(newName);
}

oldNameBuilder('Rey', 'Villaester');
newNameBuilder('Rey', 'Villaester');

const nameBuilder = (name) => {
    let firstname = name.firstname;
    let lastname = name.lastname;
    const newName = {firstname, lastname, middleInitial: 'C'};
    console.log(`My name is ${newName.firstname} ${newName.middleInitial}. ${newName.lastname}`);
}

nameBuilder({firstname: 'Rey', lastname: 'Villaester'});