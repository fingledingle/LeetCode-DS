/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let matching = {
        '(' : ')',
        '{' : '}',
        '[' : ']',
    }

    for(let i = 0; i < s.length; i++){
        if(s[i] in matching){
            stack.push(s[i]);
        }else{ 
            if(!stack.length){
                return false;
            }
            let popped = stack.pop();
            if(matching[popped] !== s[i]){
                return false;
            }
        }
    }



    return !stack.length
};