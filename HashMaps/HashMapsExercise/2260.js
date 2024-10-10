
var firstAttempt = function(cards) {
    const coolHash = new Map();
    for(let i = 0; i < cards.length; i++){
        if(!coolHash.has(cards[i])){
            coolHash.set(cards[i], [])
        }
        coolHash.get(cards[i]).push(i)
    }


    let ans = Infinity;
    console.log(coolHash)
    //Map(4) { 3 => [ 0, 3 ], 4 => [ 1, 4 ], 2 => [ 2 ], 7 => [ 5 ] }
    for([key, arr] of coolHash){
        //this loop will only go once if the number is of indexes r = 2
        for (let i = 0; i < arr.length - 1; i++){
            //this will calculate the distance between the cards
            ans = Math.min(ans, arr[i + 1] - arr[i] + 1);
            //so for example the first one being 0, 3 it will be
            // 3 - 0 + 1 = 4

        }
    }


    return ans == Infinity ? -1 : ans;
    

};




var minimumCardPickup = function(cards) {
    let dic = new Map();
    let ans = Infinity;
    for (let i = 0; i < cards.length; i++) {
        if (dic.has(cards[i])) {
            //example i = 3 | because the number 3 appeared again in the third index
                            // (3       -       0) + 1 = 4
                            // (4       -       1) + 1 = 4    
            ans = Math.min(ans, i - dic.get(cards[i]) + 1);
        }
        
        dic.set(cards[i], i);
    }

    return ans == Infinity ? -1 : ans;
    

};


console.log(minimumCardPickup([3,4,2,3,4,7]))