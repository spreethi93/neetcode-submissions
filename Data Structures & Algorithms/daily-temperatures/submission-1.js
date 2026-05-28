class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const resArr = new Array(temperatures.length).fill(0);

        for(let i=0 ; i<temperatures.length ; i++){
            while(stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
                let poppedEntry = stack.pop();
                resArr[poppedEntry[1]] = i - poppedEntry[1];
            }
            stack.push([temperatures[i], i]);
        }
        return resArr;
    }
    // dailyTemperatures(temperatures) {
    //     const tempStack = [];
    //     const resArr = new Array(temperatures.length).fill(0);
    //     for(let i=0; i<temperatures.length; i++){
    //         const t = temperatures[i];
    //         while(tempStack.length > 0 && t > tempStack[tempStack.length - 1][0]){
    //             const poppedEntry = tempStack.pop();
    //             resArr[poppedEntry[1]] = i-poppedEntry[1];
    //         }
    //         tempStack.push([t, i]);
    //     }
    //     return resArr;
    // }
}
