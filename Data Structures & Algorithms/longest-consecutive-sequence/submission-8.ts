class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let maxLength = 0;
        const numbers = new Set(nums);

        for(let n of numbers) {
            if(!numbers.has[n - 1]){
                let length = 1;
                while(numbers.has(n + length)) {
                    length++;
                }
                maxLength = Math.max(length, maxLength);
            }
        }

        return maxLength;
    }
}
