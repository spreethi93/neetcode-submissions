class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int i = 0;
        int j = numbers.length - 1;
        int sumOfTwo = 0;
        while( i < j ) {
            sumOfTwo = numbers[i] + numbers[j];
            if(sumOfTwo == target) {
                return new int[]{i+1,j+1};
            }
            if(sumOfTwo > target){
                j--;
            } else if(sumOfTwo < target){
                i++;
            }
        }
        return new int[]{};
    }
}
