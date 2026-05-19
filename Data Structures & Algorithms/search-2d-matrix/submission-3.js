class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    // searchMatrix(matrix, target) {
    //     for(let i=0; i<matrix.length; i++ ) {
    //         if(target <= matrix[i][matrix[i].length - 1]) {
    //             return this._binarySearch(0,matrix[i].length - 1, matrix[i], target);
    //         }
    //     }
    //     return false;
    // }

    // _binarySearch(l,r,arr,target) {
    //     if(l>r) return false;
    //     const mid = l + Math.floor((r-l)/2);

    //     if(arr[mid] === target) return true;

    //     return arr[mid] > target ?
    //     this._binarySearch(l, mid-1, arr, target) : 
    //     this._binarySearch(mid+1, r, arr, target);
    // }
    searchMatrix(matrix, target) {
        let ROWS = matrix.length,
        COLS = matrix[0].length;

        let l = 0, r = ROWS*COLS - 1;
        while(l <= r) {
            let m = l + Math.floor((r - l)/2);
            let row = Math.floor(m / COLS),
            col = m % COLS;
            if(matrix[row][col] === target) return true;
            if(target < matrix[row][col]) {
                r = m - 1
            } else {
                l = m + 1;
            }
        }
        return false;
    }
}
