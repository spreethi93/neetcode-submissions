class Solution {
    twoSum(arr, target) {
        let l=0;
        let r = arr.length - 1;

        while(l < r) {
            let tempSum = arr[l] + arr[r];
            if(tempSum > target) {
                r--;
            } else if(tempSum < target) {
                l++;
            } else {
                return [l+1,r+1];
            }
        }
    }
    // twoSum(arr, target) {
    //     let i = 0;
    //     let j = arr.length - 1;
    //     while(i < j) {
    //         let temp = arr[i] + arr[j];
    //         if(temp > target) {
    //             j--;
    //         } else if( temp < target) {
    //             i++;
    //         } else {
    //             return [i+1, j+1];
    //         }
    //     }
    // }
}
// class Solution {
//     /**
//      * @param {number[]} numbers
//      * @param {number} target
//      * @return {number[]}
//      */
//     twoSum(numbers, target) {
//         let i = 0;
//         let j = numbers.length - 1;
//         while(i<j) {
//             const tempTotal = numbers[i] + numbers[j];
//             if(tempTotal > target) {
//                 j--;
//             } else if(tempTotal < target) {
//                 i++;
//             } else if(tempTotal === target) {
//                 return [i+1,j+1];
//             }
//         }
//     }
// }
