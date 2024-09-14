// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.



//so in this one you do not wanna make the list smaller you just keep it the biggest u can IG IDK
var LeGuy = function(nums, k) {
    let left = 0; //so we start from 0;
    let right = 0; 
    for(right = 0; right < nums.length; right++){ //we keep on looping if the number at the index of the right number is equals to 0 if its not then we dont do anything
        if(nums[right] == 0){
            k--; //once we figure out that the number is equals 0 then we make the K value lower
        }

        if(k < 0){ //if k is bigger than 0 
            if(nums[left] == 0){ //if the num at the index of left is = 0
                k++; //then make the value of k higher
            }
            left++; // and move the list forward
        }
    }

    //SO EXAMPLE
    //1,1,1,0,0,0,1,1,1,1,0
    //IT WILL LOOP
    //EACH SINGLE LOOP IT CHECKS IF the number at the position right is equals to 0 if it is then it reduces the value of k by 1
    //and if k is less than 0 it will check if the nums at index left is == 0 and if it is it will increase the value of k
    //but EITHER WAY if k < 0 then it increases left by 1 


    //k = 2
    // 1 ->
    //      1 -> 
    //           1 ->
    //                0.                    //K THAT WAS 2 IS EQUALS 1 NOW 


    // so we reduce k by - 1
    // we keep the loop


    //k = 1
    // 1 -> 
    //      1 ->
    //           1 -> 
    //                0 ->              // k is now 1
    //                     0 ->         // k is now 0
    //                          0.      //k is now -1


    ////RIGHT THAT ONCE WAS EQUALS TO 1 IS NOW 0

    // since right is equals 0 we can go to the other if

    //since now it's the other if (we can try )

    // X -> 
    //      1 ->
    //           1 -> 
    //                0 ->                        // k is now 1
    //                     0 ->                  // k is now 0
    //                          0 ->            //k is now -1
    //                               1 ->      //k is now -1
    //right is not 0 and k is still negative so we keep entering the second loop to remove the last index from left 


    // X -> 
    //      X ->
    //           1 -> 
    //                0 ->                                    // k is now 1
    //                     0 ->                              // k is now 0
    //                          0 ->                        //k is now -1
    //                               1 ->                  //k is now -1
    //                                    1 ->            //k is now -1 
    //right is not 0 and k is still negative so we keep entering the second loop to remove the last index from left 

    // X -> 
    //      X ->
    //           X -> 
    //                0 ->                                         // k is now 1
    //                     0 ->                                   // k is now 0
    //                          0 ->                             //k is now -1
    //                               1 ->                       //k is now -1
    //                                    1 ->                 //k is now -1
    //                                         1 ->           //k is now 0
    //left index is equals 0 so K is now + 1 so from -1 k is now 0

    // X -> 
    //      X ->
    //           X -> 
    //                X ->                                               // k is now 1
    //                     0 ->                                         // k is now 0
    //                          0 ->                                   //k is now -1
    //                               1 ->                             //k is now -1
    //                                    1 ->                       //k is now -1
    //                                         1 ->                 //k is now 0
    //                                              1 ->           //k is now 1
    //left index is equals 0 so K is now + 1 so from -1 k is now 0

    // X -> 
    //      X ->
    //           X -> 
    //                X ->                                                     // k is now 1
    //                     X ->                                               // k is now 0
    //                          0 ->                                         //k is now -1
    //                               1 ->                                   //k is now -1
    //                                    1 ->                             //k is now -1
    //                                         1 ->                       //k is now 0
    //                                              1 ->                 //k is now 1
    //                                                   0 ->           //k is now 2 - 1 = 1

    //right index is equals 0 and left index is equals 0 so we remove 1 and then add 1 




 



    return right - left;
};


console.log(LeGuy([1,1,1,0,0,0,1,1,1,1,0], 2))