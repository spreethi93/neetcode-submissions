class Solution {
    public int trap(int[] height) {
        int n = height.length;
        if (n == 0) {
            return 0;
        }

        int[] maxLeft = new int[n];
        int[] maxRight = new int[n];

        maxLeft[0] = 0;
        for(int i=1; i<n; i++){
            maxLeft[i] = Math.max(maxLeft[i-1],height[i-1]);
        }
        maxRight[n-1]=0;
        for(int j=n-2; j>=0; j--){
            maxRight[j] = Math.max(maxRight[j+1],height[j+1]);
        }
        int resultArea = 0;
        for(int i=0; i<n; i++){
            int area = Math.min(maxLeft[i],maxRight[i]) - height[i];
            if(area>0){
                resultArea += area;
            }
        }
        return resultArea;
    }
}
