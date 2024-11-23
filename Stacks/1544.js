/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let list = [];
    
    
    for(letter of s){
        if(list.length > 0 && list[list.length - 1] !== letter && list[list.length -1].toUpperCase() === letter.toUpperCase()){
            list.pop();
        } else{
            list.push(letter);
        } 
    } 
    return list.join('')
    
};