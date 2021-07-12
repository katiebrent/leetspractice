/**
 * @param {string} digits
 * @return {string[]}
 */

var telephoneObj = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}


var letterCombinations = function(digitStr) {
    
    if(digitStr.length === 0) {
        return [];
    }
    
    var words = [];
    
    var lettersforDigits = function(word, digits) {
        if(digits.length === 0) {
        return words.push(word)
    }
        
        var currentDigit = digits[0];
        
        var letters = telephoneObj[currentDigit];
        for(var i = 0; i< letters.length; i++) {
            lettersforDigits(word+letters[i], digits.slice(1))
        };
        
    }
    
    lettersforDigits('', digitStr.split(''))
    
    return words

    
  
};