class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        return this._binarySearch(0, nums.length-1, nums, target);
    }

    _binarySearch(left, right, arr, target) {
        if(left > right) return -1;
        let mid = left + Math.floor((right-left)/2);

        if(arr[mid] === target) return mid;

        return target > arr[mid] ?
        this._binarySearch(mid+1, right, arr, target) : 
        this._binarySearch(left, mid-1, arr, target);

    }
}
