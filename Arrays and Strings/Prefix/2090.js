// You are given a 0-indexed array nums of n integers, and an integer k.

// The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements 
// in nums between the indices i - k and i + k (inclusive). If there are less than k elements before or after the index i, then the k-radius average is -1.

// Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.

// The average of x elements is the sum of the x elements divided by x, using integer division. 
// The integer division truncates toward zero, which means losing its fractional part.




//first we set the function obviously


function weUseThisGuy(nums, k){
    if(k === 0){
        return nums;
    }


    


    const windowSize = 2 * k + 1; //this will always be like that its the formula that will decide the window size
    const averages = new Array(nums.length).fill(-1); //then make an array with the same quantity of elements of nums (you can also run a for loop to make that happen)
    //guy above would be [-1, -1, -1....] you get it




    //if the windwoSize is smaller than the length of the arrya nums then just return averages
    if (windowSize > nums.length){
        return averages;
    }




    //now to the actual code
    //we will use prefix so set that john up
    const prefix = [0]

    //now fiill the prefix with all the sums using le prefix algorithm
    for(let i = 0; i < nums.length; ++i){
        prefix.push(nums[i] + prefix[prefix.length - 1])
    } 

    console.log(nums);
    console.log(prefix);
                        //9
    for(let i = k; i < (nums.length - k); i++){ //after doing allat lets run a for loop that starts at the position of k so 3 and ends at 9 - 3 which is 6

        const leftBound = i - k; //the first loop leftbound will be 0
        const rightBound = i + k; //the first loop rightbouynd will be 

        const subArraySum = prefix[rightBound + 1] - prefix[leftBound];
        const average = Math.floor(subArraySum/windowSize);

        console.log('subArraysum', subArraySum)
        console.log('average', average)
        averages[i] = average;
    }


    return averages





}






console.log(weUseThisGuy([7,4,3,9,1,8,5,2,6], 3))