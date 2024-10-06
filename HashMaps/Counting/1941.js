/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let counts = new Map();

    for(let i = 0; i < s.length; i++){
        counts.set(s[i], (counts.get(s[i]) || 0) + 1)
    }

    let bla = 0;
    let ans = 0;

    for(let [key, value] of counts){
        if (bla == 0){
            ans = value;
            bla+=1;
        }

        if (ans != value){
            return false
        }
    }

    return true;
};