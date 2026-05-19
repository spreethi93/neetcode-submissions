class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> numStack = new Stack<>();
        for(String c:tokens){
            if(c.equals("+")) {
                int firstNum = numStack.pop();
                int secondNum = numStack.pop();
                numStack.push(firstNum + secondNum);
            } else if(c.equals("-")) {
                  int firstNum = numStack.pop();
                int secondNum = numStack.pop();
                numStack.push(secondNum - firstNum);  
            } else if(c.equals("*")) {
                  int firstNum = numStack.pop();
                int secondNum = numStack.pop();
                numStack.push(firstNum * secondNum);  
            } else if(c.equals("/")) {
                  int firstNum = numStack.pop();
                int secondNum = numStack.pop();
                numStack.push(secondNum / firstNum);  
            } else {
                numStack.push(Integer.parseInt(c));
            }
        }
        return numStack.pop();
    }
}
