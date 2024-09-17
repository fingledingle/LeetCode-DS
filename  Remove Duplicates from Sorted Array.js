var numSubseq = function(nums, target) {
    let left = 0;
    let curr = 0;
    let answer = 0;
    for(let right = 0; right < nums.length; right++){
        curr += nums[right];

        while(curr > target){
            curr-= nums[left];
        }
        answer++;
    }

    return answer

};


console.log(numSubseq([3,3,6,8], 10));