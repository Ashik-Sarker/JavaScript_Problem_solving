function getLetter(s) {
    let letter = '';
    switch (true) {
        //------  ".indexOf(s[0]) != -1" instead of we can use ".includes(s[0])" -----
        case 'aeiou'.indexOf(s[0]) != -1:
            letter = 'A';
            break;
        case 'bcdfg'.indexOf(s[0]) != -1:
            letter = 'B';
            break;
        case 'hjklm'.indexOf(s[0]) != -1:
            letter = 'C';
            break;
        case 'npqrstvwxyz'.indexOf(s[0]) != -1:
            letter = 'D';
            break;
    }
    return letter;
}

console.log(getLetter('adfgt'));