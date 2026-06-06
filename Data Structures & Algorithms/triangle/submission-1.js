class Solution {
    /**
     * @param {number[][]} triangle
     * @return {number}
     */
    minimumTotal(triangle) {
        const lenOfRows = triangle.length;
        const dp = new Array(triangle[lenOfRows - 1].length + 1).fill(0);
        console.log('dp', dp);
        for(let i = lenOfRows - 1; i >= 0; i--) {
            for(let j = 0; j < triangle[i].length; j++) {
                dp[j] = triangle[i][j] + Math.min(dp[j], dp[j+1]);
            }
        }

        return dp[0];
    }
}
