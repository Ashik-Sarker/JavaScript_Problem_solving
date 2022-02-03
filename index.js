function regexVar(s) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re;
    l = s.length - 1;
    if (s[0] == 'a' || s[0] == 'e' || s[0] == 'i' || s[0] == 'o' || s[0] == 'u') {
        if (s[l] == 'a' || s[l] == 'e' || s[l] == 'i' || s[l] == 'o' || s[l] == 'u') {
            re = 'true';
        }
    }
    re = 'false';
    /*
     * Do not remove the return statement
     */
    return re;
}

ans = regexVar('abca');
console.log(ans);