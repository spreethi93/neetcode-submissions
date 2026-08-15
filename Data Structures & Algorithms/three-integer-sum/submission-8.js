class Solution {
    threeSum(arr) {
        const sortedArr = arr.sort((a,b) => a-b);
        const resultArr = [];
        for(let t=0 ; t <sortedArr.length-1; t++ ) {
            if(t>0 && sortedArr[t] === sortedArr[t-1]) continue;
            let i = t+1;
            let j = sortedArr.length-1;
            while(i < j) {
                let sum = sortedArr[i] + sortedArr[j];
                if(sum === -sortedArr[t]) {
                    resultArr.push([sortedArr[t],sortedArr[i],sortedArr[j]]);
                    j--;
                    i++;
                    while(i < j && sortedArr[i] === sortedArr[i-1]) i++;
                    while(i < j && sortedArr[j] === sortedArr[j+1]) j--;
                } else if(sum < sortedArr[t]) {
                    i++;
                } else {
                    j--;
                }
            }
        }
        return resultArr;
    }
}

// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {number[][]}
//      */
//     threeSum(nums) {
//         nums.sort((a,b) => a-b);
//         const resultArr = [];
//         for(let i=0; i<nums.length; i++){
//             if(nums[i] > 0) break;
//             if(i > 0 && nums[i] === nums[i-1]) continue;

//             let l = i+1;
//             let r = nums.length - 1;
//             while(l < r){
//                 const tempTotal = nums[i] + nums[l] + nums[r];
//                 if(tempTotal > 0){
//                     r--;
//                 } else if(tempTotal < 0){
//                     l++
//                 } else {
//                     resultArr.push([nums[i],nums[l],nums[r]]);
//                     l++;
//                     r--;
//                     while(l<r && nums[l] === nums[l-1]) {
//                         l++;
//                     }
//                 }
//             }
//         }
//         return resultArr;
//     }
// }
