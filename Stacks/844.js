/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    function stackCheck(list){
        let stack = []
        for(letter of list){
            if(letter !== '#'){
                stack.push(letter);
            } else{
                stack.pop();
            }
        }
        return stack.join('')
    }

    return stackCheck(s) == stackCheck(t);
};