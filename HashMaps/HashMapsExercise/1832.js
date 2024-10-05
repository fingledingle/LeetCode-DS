/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const newSet = new Set(sentence);
    return newSet.size !== 26 ?  false : true
};