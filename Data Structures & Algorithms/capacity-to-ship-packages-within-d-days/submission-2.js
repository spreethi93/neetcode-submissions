class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        // min capacity => max value from the array
        // max capacity => sum of the array elements
        // do binary search. 
        // declare l and r and find mid
        // if weights can be shipped with mid capacity
        //r = cap - 1;
        //else l = cap + 1;
        //have a res and update with min of existin res and new mid cap if satisfied
        //in can ship
        // cap will be sent
        // declare ships = 1 fn
        // loop through weights and keep negating
        // if it goes to negative
        // add ships and reset currcap
        // return true if ships <= days;

        let l = Math.max(...weights);
        let r = weights.reduce((a,b) => a + b, 0);
        let res = 0;

        function canShip(cap) {
            let ships = 1;
            let currCap = cap;
            for(let i = 0; i < weights.length; i++) {
                if(currCap - weights[i] < 0) {
                    ships++;
                    currCap = cap;
                }
                currCap = currCap - weights[i];
            }
            return ships <= days;
        }

        while(l < r) {
            let mid = Math.floor((l+r)/2);
            if (canShip(mid)) {
                r = cap - 1;
                res = Math.min(res, mid);
            } else {
                l = cap + 1;
            }
        }


    }
    // shipWithinDays(weights, days) {
    //     let l = Math.max(...weights);
    //     let r = weights.reduce((a, b) => a + b, 0);
    //     let res = r;

    //     function canShipWithCapacity(cap) {
    //         let ships = 1;
    //         let currCap = cap;

    //         for(let i = 0; i < weights.length; i++) {
    //             if(currCap - weights[i] < 0) {
    //                 ships++;
    //                 currCap = cap;
    //             }
    //             currCap -= weights[i];
    //         }

    //         return ships <= days;
    //     }

    //     while(l <= r) {
    //         let cap = Math.floor((l + r) / 2);

    //         if (canShipWithCapacity(cap)) {
    //             r = cap - 1;
    //             res = Math.min(res, cap);
    //         } else {
    //             l = cap + 1;
    //         }
    //     }

    //     return res;
    // }
}
