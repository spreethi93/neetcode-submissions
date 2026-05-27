class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const strStack = [];
        for(let c of s){
            if(c != ']'){
                strStack.push(c);
            } else {
                let subStr = '';
                while(strStack[strStack.length - 1] !== '['){
                    subStr = strStack.pop() + subStr;
                }
                strStack.pop();

                let k = '';
                while(strStack.length > 0 && !isNaN(strStack[strStack.length - 1])) {
                    k = strStack.pop() + k;
                }

                strStack.push(subStr.repeat(parseInt(k)));
            }
        }
        return strStack.join('');
    }
}
