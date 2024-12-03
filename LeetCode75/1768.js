/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let length = word1.length > word2.length ? word1.length : word2.length
    let word = ''
    for(let i = 0; i < length; i++){
        if(!word1[i]){
            word+= word2[i]
        } else if(!word2[i]){
            word+=word1[i]
        } else{
            word+= word1[i] + word2[i]
        }
    }
    return word
};