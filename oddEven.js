// --------finding Even Number---------
function evenNumberCheck(arr) {
    const evenNumber = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0) {
            evenNumber.push(arr[i]);
        }
    }
    return evenNumber;
}

// ------finding Odd Number-------------
function oddNumberCheck(arr) {
    const oddNumber = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            oddNumber.push(arr[i]);
        }
    }
    return oddNumber;
}

const number = [100, 200, 234, 456, 56565, 24, 546, 657234, 345, 4567];
console.log(evenNumberCheck(number));
console.log(oddNumberCheck(number));