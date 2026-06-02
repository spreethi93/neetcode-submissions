class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let one = 1; 
        let two = 1;
        let i = 0;
        
        while(i < n-1) {
            let temp = one;
            one = one + two;
            two = temp;
            i++
        }
        return one;
    }
}
