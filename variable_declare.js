let number = 100;
let name = 'Ashik Sarker';
const isLove = true;
let decimalNumber = 99.50;
const marksList = [100, 99, 88, 85, 87, 95, 98, 89];
const emptyArray = [];
let emptyString = '';
let students = {
    firstName :['Ashik', 'Toufique', 'Shafat', 'Kunal', 'Rafat', 'Foysal Hossain', 'Joyanto', 'Likhon', 'Arifur'],
    lastName :['Sarker', 'Ahammed', 'Ahammed', 'Ahammed', 'Rafu', 'Joti', 'Mondol', 'Ahamed', 'Rahaman'],
    idNumber :[011141151, 011141152, 011141153, 011141154, 011141155, 011141156, 011141157, 011141158, 011141159],
    cgpa :[3.99, 3.95, 3.98, 3.89, 3.87, 3.85, 3.88, 3.87, 3.87]
};
let faculties = [
    // ----- Id doesnot show accurate when I use bigger value like 011141151
    { name: 'Shakwor Shatabdo', id: 1000 },
    { name: 'Dr.Dewan Md Farid', id: 1001 },
    { name: 'Dr. Salekul Isa=lam', id: 1002 },
    { name: 'Dr.Nurul Huda', id: 1003 }
];

console.log(number);
console.log(name);
console.log(isLove);
console.log(decimalNumber);
// console.log(name);
console.log(typeof marksList);
emptyArray.push(99);
console.log(emptyArray);
emptyArray.pop();
console.log(emptyArray);
emptyString = 'Hi Ashik';
console.log(emptyString);
console.log(students);
console.log(faculties);
console.log(students.firstName[0] + students.lastName[0] + ' ' + 'Cgpa' + students.cgpa[0]);

console.log(faculties[1].id);