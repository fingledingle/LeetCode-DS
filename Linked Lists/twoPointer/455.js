/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => a-b)
    s.sort((a,b) => a-b) 
    counter = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] >= g[counter]){
            counter++
        }
    }

    return counter
};