class Solution {
    /**
     * @param {number[][]} triangle
     * @return {number}
     */
    minimumTotal(triangle) {
        const lenOfRows = triangle.length - 1;
        const dp = new Array(triangle[lenOfRows].length + 1).fill(0);

        for(let i = lenOfRows; i >= 0; i--) {
            for(let j = 0; j <= triangle[i].length; j++) {
                dp[j] = Math.min(dp[j], dp[j+1]);
            }
        }

        return dp[0];
    }
}
