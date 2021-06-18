/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    
    var even = true;
    
    if(n % 2 > 0) {
        even = false;
    }
    
    var resultStr = '';
    
    var remaining = n; 
    

    while(remaining > 1) {
        resultStr = resultStr + 'a';
        remaining--
    }
    if(even) {
        resultStr = resultStr + 'b'
    } else {
        resultStr = resultStr + 'a'
    }
    
    return resultStr;
};