class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let noOfPali = 0;

        for(let i = 0; i < s.length; i++) {
            let r = i;
            let l = i;

            while(l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
                noOfPali++;
                l--;
                r++;
            }

            l = i;
            r = i + 1;

            while(l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
                noOfPali++;
                l--;
                r++;
            }
        }

        return noOfPali;
    }
}
