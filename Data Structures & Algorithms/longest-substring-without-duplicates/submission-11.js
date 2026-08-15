class Solution {
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 0;
        let maxLength = 0;
        const charSet = new Set();
        while(r < s.length) {
            while(charSet.has(s[r])) {
                charSet.delete[s[l]];
                l++;
            }
            charSet.add(s[r]);
            maxLength = Math.max(maxLength, (r - l) + 1);
            r++;
        }
        return maxLength;
    }
}

    // lengthOfLongestSubstring(s) {
    //     let l = 0;
    //     let r = 0;
    //     let maxLength = 0;
    //     const charSet = new Set();
    //     while(r < s.length) {
    //         while(charSet.has(s[r])) {
    //             charSet.delete(s[l]);
    //             l++;
    //         }
    //         charSet.add(s[r]);
    //         maxLength = Math.max(maxLength, (r - l) + 1);
    //         r++;
    //     }
    //     return maxLength;
    // }

    // lengthOfLongestSubstring(s) {
    //     //two pointers
    //     //l at 0
    //     //r at 1
    //     //while r < n
    //     //is at r is equal to at l
    //     //increase l till it is not equal
    //     //have one maxlength variable and keep updating
    //     let l = 0;
    //     let r = 0;
    //     let maxLength = 0;
    //     let tmpArr = new Set();;
    //     while(r < s.length) {
    //         while(tmpArr.has(s[r])) {
    //             tmpArr.delete(s[l]);
    //             l++;
    //         }
    //         tmpArr.add(s[r]);
    //         maxLength = Math.max(maxLength, (r - l) + 1);
    //         r++;
    //     }
    //     return maxLength;
    // }
// class Solution {
//     lengthOfLongestSubstring(s) {
//         let l=0; let r=0;
//         let maxLength = 0;
//         const charSet = new Set();
//         while(r < s.length){
//             while(charSet.has(s[r])){
//                 charSet.delete(s[l]);
//                 l++;
//             } 
//             charSet.add(s[r]);
//             maxLength = Math.max(maxLength, r-l+1);
//             r++;
//         }
//         return maxLength;
//     }
//     // lengthOfLongestSubstring(s) {
//     //     let l=0,r=0;
//     //     let maxLength = 0;
//     //     const charSet = new Set();
//     //     while(r < s.length){
//     //         while(charSet.has(s[r])) {
//     //             charSet.delete(s[l]);
//     //             l++;
//     //         }
//     //         charSet.add(s[r]);
//     //         maxLength = Math.max(maxLength, r - l + 1);
//     //         r++;
//     //     }
//     //     return maxLength;
//     // }
//     // /**
//     //  * @param {string} s
//     //  * @return {number}
//     //  */
//     // lengthOfLongestSubstring(s) {
//     //     const charSet = new Set();
//     //     let l = 0;
//     //     let res = 0;
//     //     for(let r=0; r<s.length; r++){
//     //         while(charSet.has(s[r])) {
//     //             charSet.delete(s[l]);
//     //             l++;
//     //         }
//     //         charSet.add(s[r]);
//     //         res = Math.max(res, r-l+1);
//     //     }
//     //     return res;
//     // }
// }
