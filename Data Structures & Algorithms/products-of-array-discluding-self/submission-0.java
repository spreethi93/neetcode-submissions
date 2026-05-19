class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] prefixArray = new int[n];
        int[] suffixArray = new int[n];
        int[] resArray = new int[n];

        prefixArray[0] = 1;
        suffixArray[n-1] = 1;
        for(int i=1; i<n; i++) {
            prefixArray[i] = prefixArray[i-1] * nums[i-1];
        }
        
        for(int i=n-2; i>=0; i--) {
            suffixArray[i] = suffixArray[i+1] * nums[i+1];
        }

        for(int i=0; i<n; i++){
            resArray[i] = prefixArray[i] * suffixArray[i];
        }

        return resArray;

    }
}  
