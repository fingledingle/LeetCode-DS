/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let count = 0;
    const newSet = new Set(arr);
    
    for(let i = 0 ; i < arr.length; i++){
        if(newSet.has(arr[i] + 1)){
            count += 1;
        }
    }
    
    return count;
    
};


