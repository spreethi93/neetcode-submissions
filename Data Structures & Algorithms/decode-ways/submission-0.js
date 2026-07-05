class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const cache = new Map();
        cache.set(s.length, 1);

        function dfs(i) {
            if(cache.has(i)) return cache.get(i);
            if(s.charAt(i) === '0') return 0;

            let res = dfs(i + 1);

            if((i + 1) < s.length && (s.charAt(i) === '1' || (s.charAt(i) === '2' && s.charAt(i + 1) < '7'))) {
                res += dfs(i + 2);
            }
            cache.set(i, res);

            return res;
        }
        
        return dfs(0);
    }
}
