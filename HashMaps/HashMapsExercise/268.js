/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    //sorting them iinside the set will also sort the array itself dummy
    const coolSet = new Set(nums.sort((a, b) => a - b));

    if(!coolSet.has(0)){
        return 0;
    }
    
    for(let i = 0 ; i < nums.length; i++){
        console.log(nums[i])
        if(!coolSet.has(nums[i] + 1)){
            return nums[i] + 1
        }
    }
};


