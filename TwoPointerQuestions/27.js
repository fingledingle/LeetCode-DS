



function idkGuy(nums, val){
    let i = 0
    let n = nums.length;
    while(i < n){
        if(nums[i] === val){

            console.log('before',nums[i])
            nums[i] = nums[n - 1];
            console.log('after', nums[i])
            n--;
        }else{
            i++;
        }
    }
    return n;
}

//explanation
//(first index)
//nums[0] (3) === nums[ 4 - 1 ] === 3
//so 3 = 3
//now n is =  3
//then the next 2 numbers are not equal the val so we just add i ++;
//nums[3] (3) === nums[ 3 - 1] === 2
//so 3 is now 2



console.log(idkGuy([3,2,2,3], 3))