class Solution {
    hasDuplicate(arr) {
        return !(arr.length === new Set(arr).size);
    }
}

// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {boolean}
//      */
//     hasDuplicate(nums) {
//         return new Set(nums).size !== nums.length;
//     }
// }

// public class solution {
//     public boolean hasduplicates(int[] nums){
//         return Arrays.stream(nums).distinct().count() < nums.length;
//     }
// }