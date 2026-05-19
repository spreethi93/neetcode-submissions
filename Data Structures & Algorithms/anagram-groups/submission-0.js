class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var accSublist = new Array();
        var visitedIndices = new Array();

        for(var i=0; i<strs.length; i++) {
            if (visitedIndices.includes(i)) continue;
            visitedIndices.push(i);
            var tempList = new Array();
            tempList.push(strs[i]);
            for(var j=i+i; j<strs.length; j++){
                if(!visitedIndices.includes(j) && this.isAnagram(strs[i], strs[j])) {
                    tempList.push(strs[j]);
                    visitedIndices.push(j);
                }
            }
            accSublist.push(tempList);
        }
        return accSublist;
    }

    isAnagram(s, t) {
        if(s.length != t.length) {
            return false;
        }

        var countS = {};
        var countT = {};

        for(var i=0; i<s.length; i++) {
            countS[s.charAt(i)] = (countS[s.charAt(i)] || 0) + 1;
            countT[t.charAt(i)] = (countT[t.charAt(i)] || 0) + 1;
        }

        for(const key in countS) {
            if(countS[key] != countT[key]) return false;
        }

        return true;
    }
}
 
