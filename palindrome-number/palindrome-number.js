/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    //if less than 0; false;
    
    if(x < 0) {
        return false;
    }
    
    let strInt = x.toString();
    
    if(strInt.length === 1) {
        return true;
    };
    
    let forwardInt = 0;
    
    let backwardInt = strInt.length - 1;
    
    let result = true;
    
    while(forwardInt < backwardInt) {
        if(strInt[forwardInt] !== strInt[backwardInt]) {
            result = false;
            break;
        }
        forwardInt++;
        backwardInt--;
    }
    
    return result;
      
};