/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    let firstWord = strs[0];
    let i = 0;
    
    // Loop through each character of the first word
    while (i < firstWord.length) {
        for (let j = 1; j < strs.length; j++) {
            // Check if the current character in each string matches
            if (strs[j][i] !== firstWord[i]) {
                return firstWord.slice(0, i); // Return the common prefix up to this point
            }
        }
        i++; // Move to the next character
    }
    
    return firstWord; // If the whole firstWord is a prefix of all strings
};


    
