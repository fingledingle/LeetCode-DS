
var numIdenticalPairs = function(nums) {
    let curr = 0;
    let hash = new Map();
    for(let num of nums){
        if(hash.has(num)){
            //it worksbc curr gets the value that the current key has 
            curr += hash.get(num);
            hash.set(num, hash.get(num) + 1)
        } else(
            hash.set(num, 1)
        )
    }
    return curr;
};