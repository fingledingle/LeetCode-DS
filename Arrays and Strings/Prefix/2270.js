







function Hello(nums){
    let prefix = [nums[0]];


    for(let i = 1; i < nums.length; i ++){
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }

    console.log(prefix)


    let ans = 0;
    for (let i = 0; i < nums.length - 1; i++){

        //SO SINCE WE KNOW THE SUM OF ALL OF THEM IS 13 WE CAN DO
        let left_section = prefix[i];
        let right_section = prefix[nums.length - 1] - prefix[i]; //13 - the current index we are in sinc efor example 10 is the first index but 14 is the 10 + 4 so [10 , 4] those indexes
        console.log(right_section)
        if(left_section >= right_section){
            ans++;
        }
    }


    


    return ans;
    
}




console.log(Hello([10,4,-8,7]))