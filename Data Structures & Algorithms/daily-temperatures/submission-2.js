class Solution {

    dailyTemperatures(temps) {
        const resArr = new Array(temps.length).fill(0);
        const tempStack = [];
        for(let i = 0; i < temps.length; i++) {
            while(temps.length && temps[temps.length - 1][0] < temps[i]) {
                const lowTempDay = tempStack.pop();
                resArr[lowTempDay[1]] = i - lowTempDay[1];
            }
            tempStack.push([temps[i], i]);
        }
        return resArr;
    }


    // dailyTemperatures(temperatures) {
    //     const tmpStack = [];
    //     const resArr = new Array(temperatures.length).fill(0);
    //     for(let i = 0; i < temperatures.length; i++) {
    //         while(tmpStack.length && tmpStack[tmpStack.length - 1][0] < temperatures[i]) {
    //             let currTemp = tmpStack.pop();
    //             resArr[currTemp[1]] = i - currTemp[1];
    //         }
    //         tmpStack.push([temperatures[i], i]);
    //     }
    //     return resArr;
    // }
}
// class Solution {
//     /**
//      * @param {number[]} temperatures
//      * @return {number[]}
//      */
//     dailyTemperatures(temperatures) {
//         const stack = [];
//         const resArr = new Array(temperatures.length).fill(0);

//         for(let i=0 ; i<temperatures.length ; i++){
//             while(stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
//                 let poppedEntry = stack.pop();
//                 resArr[poppedEntry[1]] = i - poppedEntry[1];
//             }
//             stack.push([temperatures[i], i]);
//         }
//         return resArr;
//     }
//     // dailyTemperatures(temperatures) {
//     //     const tempStack = [];
//     //     const resArr = new Array(temperatures.length).fill(0);
//     //     for(let i=0; i<temperatures.length; i++){
//     //         const t = temperatures[i];
//     //         while(tempStack.length > 0 && t > tempStack[tempStack.length - 1][0]){
//     //             const poppedEntry = tempStack.pop();
//     //             resArr[poppedEntry[1]] = i-poppedEntry[1];
//     //         }
//     //         tempStack.push([t, i]);
//     //     }
//     //     return resArr;
//     // }
// }
