class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = '';
        for(let s of strs) {
            encodedString += s.length + '#' + s;
        }
        return encodedString;
    }

    decode(str) {
        const decodedArr = [];
        let i = 0;
        while(i < str.length) {
            let j = i;
            while(str[j] !== '#') {
                j++;
            }
            const lengthOfWord = parseInt(str.substring(i, j));
            decodedArr.push(str.substring(j + 1, j + 1 + lengthOfWord));
            i = j + 1 + lengthOfWord;
        }
        return decodedArr;
    }
    // encode(strs) {
    //     let returnStr = '';
    //     for(const s of strs) {
    //         returnStr += s.length + '#' + s;
    //     }
    //     return returnStr;
    // }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    // decode(str) {
    //     let i = 0;
    //     let res = [];
    //     while(i < str.length){
    //         let j = i;
    //         while(str[j] !== '#'){
    //             j++;
    //         }
    //         let length = parseInt(str.substring(i, j));//Remember this parseInt Preethi
    //         i = j + 1;
    //         j = i + length;
    //         res.push(str.substring(i,j));
    //         i = j;
    //     }
    //     return res;
    // }
}

