/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    result = 0;

    for(num of nums){
        result ^= num
    }

    return result
};