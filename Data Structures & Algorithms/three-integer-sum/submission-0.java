class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // i + j + k = 0
        // i = -(j + k)
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        for(int i=0; i<nums.length; i++) {
            int j = i+1, k = nums.length - 1;
            while(j<k){
                int sum = nums[j] + nums[k];
                if(sum == -nums[i]) {
                    result.add(Arrays.asList(nums[i], nums[j], nums[k]));
                    j++;
                    k--;
                    while(j<k && sum == -nums[i]){
                        j++;
                    }
                }else if(sum > -nums[i]){
                    k--;
                }else {
                    j++;
                }
            }
        }
        return result;
    }
}
