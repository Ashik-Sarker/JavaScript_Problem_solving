function printOnlyPositive(numbers) {
    positiveArray = [];
    for (number of numbers) {
        if (number < 0) {
            return positiveArray;
        }
        else {
            positiveArray.push(number);
        }
    }
    return positiveArray;
}

console.log(printOnlyPositive([0,12,34,50,0,-1,23,34,56,-8]));


// arr = [12, 12, 12, 32, 0, 345, -3, -2, 123, 234, -45];
// for (let i = 0; i < arr.length; i++)
// {
//     if (0 > arr[i]) {
//         console.log(arr[i]);
//     }
// }
















