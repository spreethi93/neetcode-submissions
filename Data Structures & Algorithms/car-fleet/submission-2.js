class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */

    carFleet(target, position, speed) {
        const posSpeedArr = position.map((item, index) => [item, speed[index]]);
        const sortedPosspeedArr = posSpeedArr.sort((a,b) => b[0] - a[0]);

        const fleetStack = [];

        for(const [p,s] of sortedPosspeedArr) {
            fleetStack.push((target - p)/s);
            if(fleetStack.length >= 2 && fleetStack[fleetStack.length - 2] >= fleetStack[fleetStack.length - 1]){
                fleetStack.pop();
            }
        }

        return fleetStack.length;
    }

    // carFleet(target, position, speed) {
    //     const pairArr = position.map((p,i) => [p,speed[i]]);
    //     pairArr.sort((a,b) => b[0] - a[0]);
    //     let stack = [];
    //     for(const [p,s] of pairArr){

    //         stack.push((target - p)/s);
    //         if(stack.length >= 2 &&
    //         stack[stack.length - 1] <= stack[stack.length - 2]) {
    //             stack.pop();
    //         }
    //     }
    //     return stack.length;
    // }
}
