
var maximumSum = function(nums) {
    function getDigitSum(num){
        let digitSum = 0;
        while(num > 0){
            //UNIRONICALLY THIS GETS YOU THE LAST DIGIT OF THE NUMBER
            //SO FOR EXAMPLE WE HAVE 18 NOW DIGITSUM IS 8
            digitSum += num % 10;
            console.log('before',digitSum)
            //this is responsible for removing the last digit by basically diving it by 10 
            //for example 18 is now 1.8 or 1
            num = Math.floor(num/10);
            console.log('after', num)
        }

        //sine digitsum is += it will add the values to see how much 
        //example 18 would be 1 + 8
        console.log('end result', digitSum)
        return digitSum;
    }


    let dic = new Map();
    let ans = -1;


    //for each number of the list
    for(const num of nums){


        //call this function that is responsible for separating each digit
        console.log('outside of function', num)
        let digitSum = getDigitSum(num);

        //we check if dictionary has the number returned from digitSum
        //for example 9
        if(dic.has(digitSum)){
            //if it already has 9 then we will use the current num from the list that lead to it
            //we should have 2 nums both 18 and 36
            console.log('current num:', num, 'current dic value:', dic.get(digitSum), 'now the sum:', num + dic.get(digitSum))
            ans = Math.max(ans, num + dic.get(digitSum));
            //in this case we will get inside this at least twice
            //the first time being 54 and the second being 50
            //we will do Math.max to check if the previous answer (54) is bigger than the next one which will be 50
            //since 54 is bigger we will end with that
        }

        //so for each digit sum we check if there's any of those numbers that add up to each other will be the same
        //so for example 18 = 9 || 36 = 9 those are the ones 
        //we substitute the value to check if we already have one with the same value so we can replace it
        //so               if we have a digit sum (18) then see if num(36) is bigger if it is then return 36
        dic.set(digitSum, Math.max(dic.get(digitSum) || 0, num));
    }

    //so dic(9) will be 36 bc it got sbustituted up there
    console.log(dic)

    return ans
};


console.log(maximumSum([18,43,36,13,7]))