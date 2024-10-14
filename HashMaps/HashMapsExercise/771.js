/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let hash = new Map();

    for(let i = 0; i < stones.length; i++){
        hash.set(stones[i], (hash.get(stones[i]) || 0) + 1);
    }



    let answer = 0;
    for(item of jewels){
        if(hash.has(item)){
            answer += hash.get(item);
        }
    }

    return answer;


};