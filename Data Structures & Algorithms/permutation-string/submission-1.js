class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        const s1Arr = new Array(26).fill(0);
        const s2Arr = new Array(26).fill(0);

        for(let i = 0; i < s1.length; i++){
            s1Arr[s1.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
            s2Arr[s2.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
        }

        let matches = 0;
        for(let i = 0; i < 26; i++) {
            if(s1Arr[i] === s2Arr[i]) matches++;
        }

        let l = 0;
        for(let r = s1.length; r < s2.length; r++) {
            if(matches === 26) return true;

            let index = s2.charCodeAt(r) - 'a'.charCodeAt(0);
            s2Arr[index] += 1;
            if(s2Arr[index] === s1Arr[index]) {
                matches++;
            } else if(s1Arr[index] + 1 == s2Arr[index]) {
                matches--;
            }

            index = s2.charCodeAt(l) - 'a'.charCodeAt(0);
            s2Arr[index] -= 1;
            if(s2Arr[index] == s1Arr[index]) {
                matches++;
            } else if(s1Arr[index] - 1 === s2Arr[index]) {
                matches--;
            }
            l++;
        }

        return (matches === 26);
    }
}
