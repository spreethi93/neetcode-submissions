class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let r = Math.max(...piles);
        let l = 1;
        let res = r;

        while(l <= r) {
            let k = Math.floor((r + l) / 2);
            let hours = 0;
            piles.forEach((p) => {
                hours += Math.ceil(p / k);
            }) 
            if (hours <= h) {
                res = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }

        return res;
    }
}
