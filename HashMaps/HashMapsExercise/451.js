/**
 * @param {string} s
 * @return {string}
 */


var frequencySort = function(s) {
    //first we gotta get the frequency with which they appear
    const hash = new Map(); 
    //throw the frequency in map
    for(let i = 0; i < s.length; i++){
        hash.set(s[i], (hash.get(s[i]) || 0) + 1);  
    }

    //then get the frenquency and turn it into a sorted array (from highest frequency to lower)
    let array =  Array.from(hash).sort((a,b) =>  b[1] - a[1]);
    

    //now we turn it into a string again and return the string
    let answer = ''
    for(let [letter, frequency] of array){
        answer += letter.repeat(frequency) 
    }
    return answer;
};