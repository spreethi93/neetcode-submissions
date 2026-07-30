class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let l = 0;
        let r = 0;
        let maxLength = 0;
        const numSet = new Set();
        while(r < s.length) {
            while(numSet.has(s[r])) {
                numSet.delete(s[l]);
                l++;
            }
            numSet.add(s[r]);
            maxLength = Math.max(maxLength, (r - l) + 1);
            r++;
        }

        return maxLength;
    }
}
