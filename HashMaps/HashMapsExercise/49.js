/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let groups = new Map();
    for(let s of strs){
        //split creates a list with the characters in s
        //if they contain the same letters thhey will all look the same
        //join turns them back into a string
        let key = s.split('').sort().join('')
        console.log(key)
        if(!groups.has(key)){
            groups.set(key, []);
        }
        //then get the key and push the string to the array inside of it
        groups.get(key).push(s);
    }


    let ans = []
    for(let group of groups.values()){
        ans.push(group);
    }

    return ans;
};