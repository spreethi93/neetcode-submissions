class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const nums1IdxMap = {};
        nums1.forEach((n,i) => {
            nums1IdxMap[n] = i;
        });

        const resArr = new Array(nums1.length).fill(-1);

        const numsStack = [];

        for(let currNum of nums2){
            while(numsStack.length > 0 && currNum > numsStack[numsStack.length - 1]){
                const val = numsStack.pop();
                resArr[nums1IdxMap[val]] = currNum;
            }

            if(nums1.includes(currNum)){
                numsStack.push(currNum);
            }
        }

        return resArr;
    }
}
