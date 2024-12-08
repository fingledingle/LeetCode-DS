/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    total = nums.reduce((a,b) => a + b, 0);
    left = 0;

    for(let i = 0; i < nums.length; i++){
        right = total - left - nums[i];
        console.log(right)

        if(right === left){
            return i
        }

        left += nums[i];
    }

    return -1;
};