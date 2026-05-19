class Solution {
    public int longestConsecutive(int[] nums) {
        if(nums.length == 0) {
            return 0;
        }
        Arrays.sort(nums);

        int consecutiveCount = 1;
        int lastGoodStreak = 1;
        for(int i=1; i<nums.length; i++) {
            if(nums[i-1] == nums[i]) {
                continue;
            }
            if(nums[i-1] + 1 == nums[i]) {
                consecutiveCount++;
            } else {
                consecutiveCount = 1;
            }
            lastGoodStreak = Math.max(lastGoodStreak, consecutiveCount);
        }
        return lastGoodStreak;
    }
}
