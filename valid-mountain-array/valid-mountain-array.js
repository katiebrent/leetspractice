/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    //must start by increasing (strictly)
    //must decrease eventually (strictly)
    
    //iterate over array;
    
    var increasing = true;
    var decreasing = false;
    
    var result = true;
    
    if(arr.length < 3) {
        return false;
    }
    
    if(arr[0] > arr[1]) {
        return false;
    }
    
    //if previous is equal to current, result equals false;
    
    for (var i = 0; i < arr.length; i++) {
        var current = arr[i];
        var previous = arr[i-1];
        
        if(previous && (current === previous)) {
            result = false;
        }
        if(increasing && (current < previous)){
            decreasing = true;
            increasing = false;
        }
        if(decreasing && (current > previous)) {
            result = false;
        }
        
    }
    if(!decreasing) {
        result = false;
    }
    return result;    
    
};