

// Example 3: 713. Subarray Product Less Than K.

// Given an array of positive integers nums and an integer k, return the number of subarrays where the product of all the elements in the subarray is strictly less than k.

// For example, given the input nums = [10, 5, 2, 6], k = 100, the answer is 8. The subarrays with products less than k are:

// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]


// we start by passing the array then the target guy
function SubGuy(array, k){
    if (k <= 1){ // just in case the target guy is less or equal than 1 bc then we wouldnt be able to run this anyway
        return 0;
    }


    let left = 0; //setting left pointer as 0
    let curr = 1; // since we are dealing with multiplications we can have it 0 it will start with 1
    let answer = 0; //and wel obviously answer as 0 so we can add to it later on

    //after that we will want to run a loop to increase the value of right
    for (let right = 0; right < array.length; right++){
        
        
        curr*= array[right]; //so each time we increase the value of right we want the current to be multipled by the number at the index 
        while(curr >= k){ //and to increase the left we have to check if the current is bigger than our target number which in this case is 100
            curr /= array[left]; //if it is then we devide it by the first number on the index (by doing that we decrease the size of it)
            left++ //then we do left ++ so we can keep moving the pointer
        }
        answer += right - left + 1; //the window size will be equals right - left (we will run this after every loop)
        console.log(answer)

        
    }
    return answer;
}


console.log(SubGuy[10,5,2,6], 100);

console.log(SubGuy([10,5,2,6], 100));

