class Solution {
    isAnagram(str1, str2) {
        if(str1.length != str2.length) return false;

    }
}
// class Solution {
//     /**
//      * @param {string} s
//      * @param {string} t
//      * @return {boolean}
//      */
//     // isAnagram(s, t) {
//     //     if(s.length !== t.length) return false;
//     //     var sArr = s.split('');
//     //     var tArr = t.split('');
        
//     //     for(var i = 0; i<sArr.length; i++) {
//     //         if(!tArr.includes(sArr[i])) return false;
//     //     }
//     //     return true
//     // }
//     isAnagram(s, t) {
//         if(s.length !== t.length) return false;

//         const sChars = {};
//         const tChars = {};

//         for(let i=0; i<s.length; i++) {
//             sChars[s[i]] = (sChars[s[i]] || 0) + 1;
//             tChars[t[i]] = (tChars[t[i]] || 0) + 1;
//         }

//         for(let n in sChars) {
//             if(sChars[n] !== tChars[n]) return false;
//         }

//         return true;
//     }
// }
