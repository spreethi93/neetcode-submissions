class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // isAnagram(s, t) {
    //     if(s.length !== t.length) return false;
    //     var sArr = s.split('');
    //     var tArr = t.split('');
        
    //     for(var i = 0; i<sArr.length; i++) {
    //         if(!tArr.includes(sArr[i])) return false;
    //     }
    //     return true
    // }
    isAnagram(s, t) {
        if(s.length != t.length) {
            return false;
        }

        var countS = {};
        var countT = {};

        for(var i=0; i<s.length; i++) {
            countS[s.charAt(i)] = (countS[s.charAt(i)] || 0) + 1;
            countT[t.charAt(i)] = (countT[t.charAt(i)] || 0) + 1;
        }

        for(const key in countS) {
            if(countS[key] != countT[key]) return false;
        }

        return true;
    }
}
