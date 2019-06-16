function from(event){
    let firstname = 'Rey';
    let lastname = 'Villaester';
    const fullname = firstname + ' ' + lastname;
    console.log(fullname);

    let nl = 'Hello \n' + 'World';
    console.log(nl);
    // document.getElementById('old_nl').innerText = nl;
}

function to(event){
    let firstname = 'Rey';
    let lastname = 'Villaester';
    const fullname = `${firstname} ${lastname}`
    console.log(fullname);

    let nl = `Hello
World`;
    console.log(nl);
    // document.getElementById('new_nl').innerText = nl;
}

from();
to();