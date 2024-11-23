/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let list = [];
    
    
    path = path.split('/');
    
    
    for(letter of path){
        if(letter == '' || letter == '.'){
            continue
        } 
        
        if(letter == '..'){
            if(!letter == ''){
                list.pop()
            }
        } else{
            list.push(letter);
        }
        
    }
    
    return '/' + list.join('/')
};


