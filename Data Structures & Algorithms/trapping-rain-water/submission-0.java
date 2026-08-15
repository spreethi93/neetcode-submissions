class Solution {
    public int trap(int[] height) {
        int[] maxLeft = new int[height.length];
        int[] maxRight = new int[height.length];

        maxLeft[0] = 0;
        for(int i=1; i<height.length; i++){
            maxLeft[i] = Math.max(maxLeft[i-1],height[i-1]);
        }
        maxRight[height.length-1]=0;
        for(int j=height.length-2; j>=0; j--){
            maxRight[j] = Math.max(maxRight[j+1],height[j+1]);
        }
        int resultArea = 0;
        for(int i=1; i<height.length; i++){
            int area = Math.min(maxLeft[i],maxRight[i]) - height[i];
            if(area>1){
                resultArea += area;
            }
        }
        return resultArea;
    }
}
