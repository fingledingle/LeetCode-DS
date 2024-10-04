/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false
    }else{
        const stringGuy = String(x);
        let left = 0;
        let right = stringGuy.length - 1;
        while(left < right){
            if(stringGuy[left] == stringGuy[right]){
                left++;
                right--;
            }else{
                return false
            }
        }

        return true
    }
};