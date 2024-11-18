/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let hash = new Map();

    hash.set(0, 0)
    hash.set(1, 0)
    hash.set(2, 0)




    for(let i = 0; i < nums.length; i++){
        hash.set(nums[i], hash.get(nums[i]) + 1);
    }



    index = 0;
    for([key, value] of hash){
        for(let i = 0; i < value; i++){
            nums[index] = key;
            index++;
        }
    }

    

};