/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hash = new Map();

    let maxKey = 0;
    let maxVal = 0;

    for(let i = 0; i < nums.length; i++){
        hash.set(nums[i], (hash.get(nums[i]) || 0) + 1);
    }


    for([key, value] of hash){
        if(value > maxVal){
            maxKey = key;
            maxVal = value;
        }
    }

    return maxKey
};