class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let l = Math.max(...weights);
        let r = weights.reduce((a, b) => a + b, 0);
        let res = r;

        function canShipWithCapacity(cap) {
            let ships = 1;
            let currCap = cap;

            for(let i = 0; i < weights.length; i++) {
                if(currCap - weights[i] < 0) {
                    ships++;
                    currCap = cap;
                }
                currCap -= weights[i];
            }

            return ships <= days;
        }

        while(l <= r) {
            let cap = Math.floor((l + r) / 2);

            if (canShipWithCapacity(cap)) {
                r = cap - 1;
                res = Math.min(res, cap);
            } else {
                l = cap + 1;
            }
        }

        return res;
    }
}
