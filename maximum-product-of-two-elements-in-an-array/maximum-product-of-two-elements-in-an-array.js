/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    //max value
    var max = null;
    
    var highest = null;
    
    //secondhighest
    var secondHighest = null;
    
    //we're going to need the two highest values in the array.
        //iterate over array
    
    for (var i = 0; i< nums.length; i++) {
        if(!highest) {
            highest = nums[i];
        } else if(nums[i] >= highest) {
                secondHighest = highest;
                highest = nums[i]
            } else if(!secondHighest || nums[i] > secondHighest) {
                secondHighest = nums[i]
            }
        }
    
    max = (highest - 1) * (secondHighest - 1);

return max

    
};