class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let returnStr = '';
        for(const s of strs) {
            returnStr += s.length + '#' + s;
        }
        return returnStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let res = [];
        while(i < str.length){
            let j = i;
            while(str[j] !== '#'){
                j++;
            }
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;
            res.push(str.substring(i,j));
            i = j;
        }
        return res;
    }
}

