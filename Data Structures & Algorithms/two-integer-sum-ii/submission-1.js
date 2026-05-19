class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1;
        while(i<j) {
            const tempTotal = numbers[i] + numbers[j];
            if(tempTotal > target) {
                j--;
            } else if(tempTotal < target) {
                i++;
            } else if(tempTotal === target) {
                return [i+1,j+1];
            }
        }
    }
}
