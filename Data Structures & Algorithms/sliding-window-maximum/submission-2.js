class myDeque {
    constructor() {
        this.frontIndex = 0;
        this.backIndex = 0;
        this.myArr = [];
    }

    pushBack(n) {
        this.myArr.push(n);
    }

    popBack() {
        this.myArr.pop();
    }

    popFront() {
        this.myArr.shift();
    }

    peekBack() {
        return this.myArr[this.myArr.length - 1];
    }

    peekFront() {
        return this.myArr[0];
    }

    size() {
        return this.myArr.length;
    }
}
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let l = 0;
        let r = 0;
        const n = nums.length;
        const output = new Array(n - k + 1);
        const q = new myDeque();
        
        while(r < n) {
            while(q.size() && nums[q.peekBack()] < nums[r]) {
                q.popBack();
            }
            q.pushBack(r);

            if(l > q.peekFront()) {
                q.popFront();
            }

            if(r + 1 >= k) {
                output[l] = nums[q.peekFront()];
                l++;
            }

            r++;

        }
        return output;
    }
}
