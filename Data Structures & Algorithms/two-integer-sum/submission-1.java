// class Solution {
//     public int[] twoSum(int[] nums, int target) {
//         for(int i=0; i<nums.length; i++){
//             for(int j=0; j<nums.length; j++){
//                 if(nums[i] + nums[j] == target) {
//                     return new int[]{i,j};
//                 }
//             }
//         }
//         return new int[0];
//     }
// }

class Solution {
    public int[] twoSum(int[] nums, int target){
        HashMap<Integer, Integer> sumMap = new HashMap<>();
        for(int i=0; i<nums.length; i++){
            int diff = target - nums[i];
            if(sumMap.containsKey(diff)) {
                return new int[]{sumMap.get(diff), i};
            }
            sumMap.put(nums[i], i);
        }

        return new int[] {};
    }
}
