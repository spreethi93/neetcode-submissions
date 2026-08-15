class Solution {
    lengthOfLongestSubstring(s) {
        let l=0,r=0;
        let maxLength = 0;
        const charSet = new Set();
        while(r < s.length){
            while(charSet.has(s[r])) {
                charSet.delete(s[l]);
                l++;
            }
            charSet.add(s[r]);
            maxLength = Math.max(maxLength, r - l);
            r++;
        }
        return maxLength;
    }
    /**
     * @param {string} s
     * @return {number}
     */
    // lengthOfLongestSubstring(s) {
    //     const charSet = new Set();
    //     let l = 0;
    //     let res = 0;
    //     for(let r=0; r<s.length; r++){
    //         while(charSet.has(s[r])) {
    //             charSet.delete(s[l]);
    //             l++;
    //         }
    //         charSet.add(s[r]);
    //         res = Math.max(res, r-l+1);
    //     }
    //     return res;
    // }
}
