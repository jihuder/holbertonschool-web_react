interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student ={
    firstName:'John',
    lastName: 'Doe',
    age: 35,
    location: 'San Francisco',
}

let student2: Student ={
    firstName:'Patrick',
    lastName: 'Steward',
    age: 37,
    location: 'Los Angeles',
}

const studentsList: Student[] = [ student1, student2 ]

let table = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach(student => {
    let tr = table.insertRow();
    let tdName = tr.insertCell();
    let tdLocation = tr.insertCell();
    tdName.innerText = student.firstName;
    tdLocation.innerText = student.location;
})
