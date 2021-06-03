/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    var gte = true;
    var lte = true;
    
    for(var i = 0; i<nums.length; i++) {
        var currentNum = nums[i];
        var nextNum = nums[i+1];
        if(currentNum > nextNum) {
            gte = false;
        }
        if(currentNum < nextNum) {
            lte = false;
        }
    }
    var result = false;
    if(gte || lte) {
        result = true
    };
    return result
    
    
};