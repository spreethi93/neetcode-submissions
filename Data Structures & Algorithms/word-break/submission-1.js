class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const cache = {
            [s.length] : true
        };

        function dp(i) {
            if(i in cache) {
                return cache[i];
            }

            for(let w of wordDict) {
                if(i + w.length <= s.length && s.substring(i, i + w.length) === w) {
                    if(dp(i + w.length)) {
                        cache[i] = true;
                        return true
                    }
                }
            }
            cache[i] = false;
            return false;
        }

        return dp(0);
    }
}
