class Solution {
    maxArea(arr) {
        let i = 0, j = arr.length - 1;
        let maxArea = 0;
        while(i<j){
            const currentArea = (j - i) * Math.min(arr[i], arr[j]);
            maxArea = Math.max(maxArea,currentArea);
            if( arr[i] <= arr[j]) {
                i++;
            } else {
                j--;
            }
        }

        return maxArea;
    }
}

// class Solution {
//     /**
//      * @param {number[]} heights
//      * @return {number}
//      */
//     maxArea(heights) {
//         let i = 0;
//         let j = heights.length - 1;
//         let area = 0;

//         while(i < j) {
//             const tempArea = Math.min(heights[i], heights[j]) * (j-i);
//             area = Math.max(area, tempArea);
//             if(heights[i] <= heights[j]){
//                 i++;
//             } else {
//                 j--;
//             }
//         }
//         return area;
//     }
// }
