/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(' ')
    let ans = [];


    for(let i = words.length - 1; i >= 0; i--){
        if(words[i]){
            ans.push(words[i]);
        }
    }

    return ans.join(' ')
};