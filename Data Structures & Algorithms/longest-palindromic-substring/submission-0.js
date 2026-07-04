class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let longestStr = '';
        let longestStrLen = 0;

        for(let i = 0; i < s.length; i++) {
            let l = i;
            let r = i;

            while((l >= 0) && (r < s.length) && (s.charAt(l) === s.charAt(r))) {
                if((r - l + 1) > longestStrLen) {
                    longestStr = s.substring(l,r + 1);
                    longestStrLen = (r - l) + 1;
                }
                l--;
                r++;
            }
            
            l = i;
            r = i + 1;

            while((l >= 0) && (r < s.length) && (s.charAt(l) === s.charAt(r))) {
                if((r - l + 1) > longestStrLen) {
                    longestStr = s.substring(l,r + 1);
                    longestStrLen = (r - l) + 1;
                }
                l--;
                r++;
            }
        }

        return longestStr;
    }
}
