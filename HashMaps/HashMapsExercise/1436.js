/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const set = new Set();

    for(let i = 0; i< paths.length; i++){
        set.add(paths[i][0]);
    }


    for(let i = 0; i < paths.length; i++){
        if(!set.has(paths[i][1])){
            return paths[i][1]
        }
    }    

    return '';

};