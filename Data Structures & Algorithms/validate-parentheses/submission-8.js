class Solution {
    isValid(s) {
        const bracketMap = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }

        const stackArr = [];

        for(let a of s){
            if(bracketMap[a]){
                if(stackArr.length > 0 && bracketMap[a] == stackArr[stackArr.length - 1]){
                    stackArr.pop();
                } else {
                    return false;
                }
            } else {
                stackArr.push(a);
            }
        }
        return !stackArr.length;
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    // isValid(s) {
    //     const stack = [];
    //     const closeToOpen = {
    //         '}': '{',
    //         ']': '[',
    //         ')': '('
    //     }

    //     for(let c of s){
    //         if(closeToOpen[c]){
    //             if(stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]){
    //                 stack.pop();
    //             } else {
    //                 return false;
    //             }
    //         } else {
    //             stack.push(c);
    //         }
    //     }

    //     return stack.length === 0;
    // }
}
