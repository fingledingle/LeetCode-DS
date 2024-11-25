/**
 * @param {number[][]} matches
 * @return {number[][]}
 */

//first way i did it
var findWinners = function(matches) {
    let obj = new Map();

    for([winner, loser] of matches){
        obj.set(winner, (obj.get(winner) || 0))
        obj.set(loser, (obj.get(loser) || 0) + 1)
    }
    ans = [[], []];
    for([key, value] of obj){
        if(value === 0){
            ans[0].push(key);
        } else if(value === 1){
            ans[1].push(key);
        }
    }

    ans[0] = ans[0].sort((a,b) => a-b);
    ans[1] = ans[1].sort((a,b) => a-b)

    
    return ans;
};


///after figuring out that objects are automatically stored sorted unlike maps
/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let obj = {};

    for(let match of matches){
        if(!obj[match[0]]) obj[match[0]] = 0
        if(!obj[match[1]]) obj[match[1]] = 0

        ++obj[match[1]]
    }


    ans = [[], []];

    for(let [key,value] of Object.entries(obj)){
        key = parseInt(key)
        if(value === 0){
            ans[0].push(key)
        }
        if(value === 1){
            ans[1].push(key)
        }
    }

    
    return ans;
};

