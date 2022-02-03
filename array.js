const arr = [120, 'ashik', 12.22, 'sarker'];

arr.push('Ashik Sarker');
console.log(arr);
arr[3] = 100;
console.log(arr);
console.log(arr.indexOf('Ashik Sarker'));

for (arrayItem of arr) {
    console.log(arrayItem);
}