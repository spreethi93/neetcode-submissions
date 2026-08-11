class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let min = 1;
        let max = Math.max(...piles);
        let result: number;
        while(min <= max) {
            const k = Math.floor((min + max)/2);
            let totalTime = 0;

            for(const p of piles) {
                totalTime += Math.ceil(p/k);
            }

            if(totalTime <= h) {
                result = k;
                max = k - 1;
            } else {
                min = k + 1;
            }
        }
        return result;
    }
}
