class Solution {

    isAlphanumeric(c) {
        return ((c >= 'a' && c <= 'z') ||
        (c >= 'A' && c <= 'Z') ||
        (c >= '0' && c <= '9'))
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        let j = s.length - 1;
        while(i < j) {
            while(i < j && !this.isAlphanumeric(s[i])) i++;
            while(j > i && !this.isAlphanumeric(s[j])) j--;
            if(s[i].toLowerCase() !== s[j].toLowerCase()) return false;
            i++;
            j--;
        }
        return true;
    }
}
