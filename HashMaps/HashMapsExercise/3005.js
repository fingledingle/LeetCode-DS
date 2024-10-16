/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let hash = new Map();

    for(let i = 0; i < nums.length; i++){
        hash.set(nums[i], (hash.get(nums[i]) || 0) + 1);
    }

    let maxValue = Math.max(...hash.values())
    let ans = 0;
    for([key, value] of hash){
        if(value == maxValue){
            ans+=value
        }
    }

    return ans;
};