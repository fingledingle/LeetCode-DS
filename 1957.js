/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let newWord = '';
    let counter = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] == s[i + 1]){
            counter++
        } else (
            counter = 0
        )
        if(counter < 2){
            newWord+=s[i]
        }
    }

    return newWord



};