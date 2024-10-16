/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let hash = new Map();

    for(let i = 0; i < arr.length; i++){
        hash.set(arr[i], (hash.get(arr[i]) || 0) + 1);
    }


    let ans = -1;


    for([key, value] of hash){
        if(key == value){
            //this is very import rember this
            ans = Math.max(ans, value)
        }
    }

    return ans
    
};