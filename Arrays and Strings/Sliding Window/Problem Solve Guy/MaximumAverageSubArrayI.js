// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
//  Any answer with a calculation error less than 10-5 will be accepted.

function findAverageGuy(arr, k){
    let curr = 0;
    for(let i = 0; i < k; i++){
        curr += arr[i];
    }

    let answer = curr;
    for(let i = k; i < arr.length; i++){
        curr+= arr[i] - arr[i - k];
        answer = Math.max(answer, curr);
    }


    return answer/k;
}



console.log(findAverageGuy([1,12,-5,-6,50,3], 4));