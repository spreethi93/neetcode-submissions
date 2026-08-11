class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let row: number[];
        for(let i=0; i<matrix.length; i++){
            if(target <= matrix[i][matrix[i].length - 1]){
                console.log('i', i);
                row = matrix[i];
                console.log('row', row);
                break;
            }
        }
        if(!row) return false;

        let l = 0;
        let r = row.length - 1;
        while(l <= r) {
            const mid = Math.floor((l+r)/2);
            if(row[mid] === target) {
                return true;
            } else if(row[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return false;

    }
}
