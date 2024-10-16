/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const hash = new Map();
    

    for(let i = 0; i < nums.length; i++){
        hash.set(nums[i], (hash.get(nums[i]) || 0) + 1);
    }


    let answer = 0;
    for(let [key, value] of hash){
        if(value == 1){
            answer+=key;
        }
    } 



    return answer




};