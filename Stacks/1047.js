/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];

    for(letter of s){
        if(stack.length && stack[stack.length - 1] == letter){
            stack.pop();
        } else{
            stack.push(letter);
        }
    }

    return stack.join('')


};