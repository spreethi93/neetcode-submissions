class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {string}
     */
    removeDuplicates(s, k) {
        const charCountStack = [];
        for(let c of s){
            if(charCountStack.length > 0 && charCountStack[charCountStack.length - 1][0] === c) {
                charCountStack[charCountStack.length - 1][1] += 1;
                if(charCountStack[charCountStack.length - 1][1] === k){
                    charCountStack.pop();
                }
            } else {
                charCountStack.push([c, 1]);
            }
        }
        let resStr = '';
        for(let i=0 ; i<charCountStack.length; i++){
            resStr += charCountStack[i][0].repeat(charCountStack[i][1]);
        }
        return resStr;
    }
}
