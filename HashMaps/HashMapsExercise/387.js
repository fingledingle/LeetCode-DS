// Given a string s, find the first non-repeating character 
// in it and return its index. If it does not exist, return -1.




/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const hashguy = new Map();


    for(let i = 0; i < s.length; i ++){
        let character = s[i];
        if(!hashguy[character]){
            hashguy[character] = 1
        } else {
            hashguy[character] += 1
        }
    }

    for (let i = 0; i < s.length; i ++){
        if(hashguy[s[i]] == 1){
            return i;
        }
    }

    return -1


    console.log(hashguy)
};