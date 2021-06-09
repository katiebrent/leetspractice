/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    
    //object with groupings and counts
    var countObj = {};
    
    //iterate over array
    for (var i = 0; i< deck.length; i++) {
        if(countObj[deck[i]]) {
            countObj[deck[i]]++
        } else {
            countObj[deck[i]] = 1
        }
    }
    
    var greaterThanOne = true;
    var lowest = null;
    
    for (var key in countObj) {
        if(countObj[key] === 1) {
            greaterThanOne = false;
        }
        if(!lowest) {
            lowest = countObj[key];
        } else if (countObj[key] < lowest) {
            lowest = countObj[key];
        }
    }
    
    if(!greaterThanOne) {
        return false;
    }
    
    //find factors of lowest
    var factors = [];
    
    for (var j = 2; j<= lowest; j++) {
        if(lowest % j === 0) {
            factors.push(j)
        }
    }
    
    for(var key in countObj) {
    for (var k = 0; k<factors.length; k++) {
        var currentFactor = factors[k]
          
        if(countObj[key] % currentFactor !== 0) {
            factors.splice(k, 1)
        }
    }
        
    }
    
    if(factors.length > 0) {
        return true;
    } else {
        return false;
    }
    
};