class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        var sArr = s.split('');
        var tArr = t.split('');
        
        for(var i = 0; i<sArr.length; i++) {
            if(!tArr.includes(sArr[i])) return false;
        }
        return true
    }
}
