class Solution {
    climbStairs(n) {
        const cache = new Int32Array(n).fill(-1);
        function dp(i) {
            if(i === n) return 1;
            if(i > n) return 0;
            if(cache[i] !== -1) return cache[i];

            return cache[i] = dp(i + 1) + dp(i + 2);
        }

        return dp(0);
    }

    
    // climbStairs(n) {
    //     const cache = new Int32Array(n).fill(-1);
    //     function dp(i){
    //         if(i === n) return 1;
    //         if(i > n) return 0;
            
    //         if(cache[i] != -1) return cache[i];

    //         return (cache[i] = dp(i + 1) + dp(i + 2));
    //     }

    //     return dp(0);
    // }

        /**
     * @param {number} n
     * @return {number}
     */
    // climbStairs(n) {
    //     let one = 1; 
    //     let two = 1;
    //     let i = 0;
        
    //     while(i < n-1) {
    //         let temp = one;
    //         one = one + two;
    //         two = temp;
    //         i++
    //     }
    //     return one;
    // }

    // climbStairs(n) {
    //     function dp(i) {
    //         if(i === n) return 1;
    //         if(i > n) return 0;
    //         return dp(i + 1) + dp(i + 2)
    //     }
    //     return dp(0);
    // }
}
