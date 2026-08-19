class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        const res = [];

        if(digits.length == 0) return [];

        const digitToStrMap = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "qprs",
            8: "tuv",
            9: "wxyz",
        }
        
        function dfs(i, curStr) {
            if(curStr.length == digits.length) {
                res.push(curStr);
                return
            }

            for(let c of digitToStrMap[digits[i]]) {
                dfs(i + 1, curStr + c);
            }

        }

        dfs(0, '');

        return res;
    }
}
