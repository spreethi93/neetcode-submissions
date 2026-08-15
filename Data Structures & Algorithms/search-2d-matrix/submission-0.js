class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let i=0; i<matrix.length; i++ ) {
            if(target <= matrix[i][matrix[i].length - 1]) {
                return this._binarySearch(0,matrix[i].length - 1, matrix[i], target);
            }
        }
    }

    _binarySearch(l,r,arr,target) {
        if(l>r) return false;
        const mid = l + Math.floor((l+r)/2);

        if(arr[mid] === target) return true;

        return arr[mid] > target ?
        this._binarySearch(l, mid-1, arr, target) : 
        this._binarySearch(mid+1, r, arr, target);
    }
}
