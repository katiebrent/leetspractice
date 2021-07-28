/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let output = "";
    
    let index = 0;
    
    let helperFunc = function(word, index) {
        if(index === word.length) {
            return;
        }
        let same = true;
        for (var i = 0; i<strs.length; i++) {
            if(strs[i][index] !== word[index]) {
                same = false;
                return;
            }
        }
        if(same) {
            output += word[index];
            index++;
            helperFunc(word, index)
        }
        
    }
    
    helperFunc(strs[0], index)
    
    return output;
    
};