/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

//first way i did it doesnt pass all the things and it just generally dookie anyway
var insert = function(intervals, newInterval) {
    intervals.sort((a,b) => a[0] - b[0]);
    let list = [...intervals];
    let ans = [];

    if(intervals.length == 0) {
        ans.push(newInterval);
        return ans;
    }

    for(let i = 1; i < intervals.length; i ++){
        let interval = intervals[i];

        if(interval[0] >= newInterval[0]){
            list.splice(i, 0, newInterval);
            break;
        }
    }

    let prev = list[0]


    for(let i = 1; i < list.length; i++){
        interval = list[i];

        if(interval[0] <= prev[1]){
            prev[1] = Math.max(prev[1], interval[1])
        } else{
            ans.push(prev);
            prev = interval;
        }
    }

    ans.push(prev);
    return ans;    
};






//second way i did it
var insert = function(intervals, newInterval) {
    let list = [...intervals, newInterval];
    list.sort((a,b) => a[0] - b[0]);
    let ans = [];
    let prev = list[0]
    for(let i = 1; i < list.length; i++){
        interval = list[i];

        if(interval[0] <= prev[1]){
            prev[1] = Math.max(prev[1], interval[1])
        } else{
            ans.push(prev);
            prev = interval;
        }
    }

    ans.push(prev);
    return ans;    
};

//Try again this week prob