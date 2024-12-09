/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let hash = new Map();
    let ans = new Set();
    for(let i = 0; i < arr.length; i++){
        hash.set(arr[i], (hash.get(arr[i]) || 0) + 1);
    }

    for([key, value] of hash){
        if(ans.has(value)){
            return false;
        }
        ans.add(value);
    }

    return true;
};