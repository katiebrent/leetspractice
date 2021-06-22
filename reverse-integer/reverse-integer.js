/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let stringInt = x.toString();
    
    if(stringInt.length === 1) {
        return x;
    }
    
    let result = "";
    
    let firstInt = 0;
    
    if(stringInt[0] === "-") {
        firstInt = 1;
        result += "-"  
    };
    
    for (let i = stringInt.length - 1; i >= firstInt; i--) {
        result += stringInt[i];
    }
    
    let numResult = Number(result);
    
    if(Math.abs(numResult) > ((2 ** 31) - 1)) {
        return 0
    }
    
    return numResult
    
};