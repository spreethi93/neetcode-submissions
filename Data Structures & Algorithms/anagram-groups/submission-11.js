class Solution {
    groupAnagrams(strs) {
        const charMap = {};

        for(let str of strs) {
            const alphArr = new Array(26).fill(0);
            for(let c of str) {
                alphArr[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = alphArr.join();
            if(!charMap[key]) {
                charMap[key] = [];
            }

            charMap[key].push(str);
        }

        return Object.values(charMap);
    }
     

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // groupAnagrams(strs) {
    //     const alphabetToWordsMap = {};
    //     for(let str of strs){
    //         const countArray = new Array(26).fill(0);
    //         for(let c of str){
    //             countArray[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1; 
    //         }
    //         const key = countArray.join();
    //         if(!alphabetToWordsMap[key]){
    //             alphabetToWordsMap[key] = [];
    //         } 
    //         alphabetToWordsMap[key].push(str);
    //     }
    //     return Object.values(alphabetToWordsMap);
    // }

    // groupAnagrams(strs) {
    //     const anagramMap = new Map();
    //     for(let s of strs) {
    //         const countArray = new Array(26).fill(0);
    //         for(let c of s) {
    //             countArray[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    //         }
    //         const key = countArray.join(',');
    //         if(!anagramMap[key]) {
    //             anagramMap[key] = [];
    //         }
    //         anagramMap[key].push(s);
    //     }
    //     return Object.values(anagramMap);
    // }
    // groupAnagrams(strs) {
    //     var accSublist = new Array();
    //     var visitedIndices = new Array();

    //     for(var i=0; i<strs.length; i++) {
    //         if (visitedIndices.includes(i)) continue;
    //         visitedIndices.push(i);
    //         var tempList = new Array();
    //         tempList.push(strs[i]);
    //         for(var j=i+i; j<strs.length; j++){
    //             if(!visitedIndices.includes(j) && this.isAnagram(strs[i], strs[j])) {
    //                 tempList.push(strs[j]);
    //                 visitedIndices.push(j);
    //             }
    //         }
    //         accSublist.push(tempList);
    //     }
    //     return accSublist;
    // }

    // isAnagram(s, t) {
    //     if(s.length != t.length) {
    //         return false;
    //     }

    //     var countS = {};
    //     var countT = {};

    //     for(var i=0; i<s.length; i++) {
    //         countS[s.charAt(i)] = (countS[s.charAt(i)] || 0) + 1;
    //         countT[t.charAt(i)] = (countT[t.charAt(i)] || 0) + 1;
    //     }

    //     for(const key in countS) {
    //         if(countS[key] != countT[key]) return false;
    //     }

    //     return true;
    // }
}
 
