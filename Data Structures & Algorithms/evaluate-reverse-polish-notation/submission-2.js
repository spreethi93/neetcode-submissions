class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operators = ['+', '-', '*', '/'];
        for(const c of tokens){
            if(operators.includes(c)){
                const op2 = stack.pop();
                const op1 = stack.pop();
                switch(c) {
                    case '+':
                        stack.push(op1 + op2);
                        break;
                    case '-':
                        stack.push(op1 - op2);
                        break;
                    case '*':
                        stack.push(op1 * op2);
                        break;
                    case '/':
                        stack.push(Math.trunc(op1/op2));
                        break;
                }
            } else {
                stack.push(parseInt(c));
            }
        }
        return stack.pop();
    }
}
