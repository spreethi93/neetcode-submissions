// Definition for a pair.
// class Pair {
//     public int key;
//     public String value;
//
//     public Pair(int key, String value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    public List<Pair> mergeSort(List<Pair> pairs) {
        return mergeSortHelper(pairs, 0, pairs.size()-1);
    }

    public List<Pair> mergeSortHelper(List<Pair> pairs, int startIndex, int endIndex){
        if (endIndex - startIndex + 1 <= 1) {
            return pairs;
        }

        int midIndex = (startIndex + endIndex)/2;
        mergeSortHelper(pairs, startIndex, midIndex);
        mergeSortHelper(pairs, midIndex+1, endIndex);

        mergeArrays(pairs, startIndex, midIndex, endIndex);
        return pairs;
    }

    public void mergeArrays(List<Pair> arr, int startIndex, int midIndex, int endIndex) {
        List<Pair> left = new ArrayList<>(arr.subList(startIndex, midIndex + 1));
        List<Pair> right = new ArrayList<>(arr.subList(midIndex +1, endIndex + 1));

        int i = 0;//index for left
        int j = 0;//index for right
        int k = startIndex;//index for arr
        
        while( i < left.size() && j < right.size()){
            if(left.get(i).key <= right.get(j).key) {
                arr.set(k, left.get(i++));
            } else {
                arr.set(k, right.get(j++));
            }
            k++;
        }
        while( i < left.size() ) {
            arr.set(k, left.get(i++));
            k++;
        }
        while( j < right.size() ) {
            arr.set(k, right.get(j++));
            k++;
        }
    }
}

