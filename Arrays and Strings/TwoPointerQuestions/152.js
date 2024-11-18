/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(nums.length === 0) return 0;
    
    let max = nums[0];
    let min = nums[0];
    let result = max;



    for(let i = 1; i < nums.length; i ++){
        const curr = nums[i];

        //if curr is bigger than max * the current or min * curr
        const temp = Math.max(curr, max * curr, min * curr)
        //grab the minimal number 
        min = Math.min(curr, max * curr, min * curr);

        //save the max number as temp
        max = temp;

        result = Math.max(max, result);


    }

    return result;
};