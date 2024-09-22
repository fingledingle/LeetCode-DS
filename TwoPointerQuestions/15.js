
var threeSum = function(nums) {

    //first since we are gonnad o two pointers we might aswell sort the array
    nums.sort((a,b) => a - b);
    
    //now lets set answer as an open array
    let res = [];

    //setting the foor loop and the conditions so
                //it stops once it reaches the end of the array
                //and number i has to be less or equal to 0 for it to run or else it goes to the next
    for(let i = 0; i < nums.length && nums[i] <= 0; ++i)

        //making sure they dont repeat
        if(nums[i - 1] !== nums[i]){
            twoSumII(nums, i, res);
        }

    return res;
}

//auxiliary function to check if the add up is right
function twoSumII(nums, i, res){
    //the second pointer which is the one right after the first
    let left = i + 1;
    //our last pointer (the one all teh way up to the right)
    right = nums.length - 1; 

    //while left is less than the right (while they havent touched)
    while(left < right){

        //i want the sum to eb equal all of the pointers
        let sum = nums[i] + nums[left] + nums[right];

        //is the summary smaller than 0?
        if(sum < 0){

            //if it is then we move the left pointer (not i) to the right
            left++;
        }



        //is the summary bigger than 0 
        else if(sum > 0){

            //if yes then we can move the right to the left by decreasing it
            right--;
        }


        //else the sum is 0 which is what we are currently looking for 
        else if (sum==0) {

            //then we can throw the numbers from the sum in the array as a subarray
            res.push([nums[i], nums[left], nums[right]]);

            //then to keep going on the loop we have to try finding a new one
            //so we increase left
            left++;

            //and decrease right
            right--;


            //for each index of I we can run this mini loop to see if the next numbers repeat if they do then we can just skip them by adding to left
            while(left < right && nums[left] == nums[left - 1]){
                left++
            }
        }
    

    }

}




console.log(threeSum([-1,0,1,2,-1,-4]))