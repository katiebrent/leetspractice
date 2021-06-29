/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    
    if(n === 1) {
        return "1";
    } 
    
    let buildUp = 1;
    
    let resultStr = ""
    
    let sayString = function (buildUp, currentStr) {
    
    let countObj = {};
        
    let countArr = [];
    let intArr = [];
    
    for(let i = 0; i< currentStr.length; i++) {
        let currentInt = currentStr[i];
        let previousInt = currentStr[i - 1];
        
        if(currentInt === previousInt) {
            countObj[currentInt]++  
        } else {
            if(i > 0) {
            countArr.push(countObj[previousInt]);
            intArr.push(previousInt);
            delete countObj[previousInt]; 
            }
            
            countObj[currentInt] = 1;
            
        }
        if(i === currentStr.length - 1) {
                countArr.push(countObj[currentInt])
                intArr.push(currentInt)
            }
    }
    
    let nextStr = "";
    
    for(let j = 0; j<countArr.length; j++) {
            nextStr += countArr[j];
            nextStr += intArr[j];
        }
    
    if(buildUp === n) {
        resultStr = currentStr;
        return;
    } else {
        buildUp++;
        sayString(buildUp, nextStr)
    }
    }
    
    sayString(buildUp, "1")
    
    return resultStr
    
    
};