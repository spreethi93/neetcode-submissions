class Solution {
    public boolean isValid(String s) {
        Stack<Character> charStack = new Stack<>();
        Map<Character, Character> paranthesisMap = new HashMap<>();
        paranthesisMap.put('{', '}');
        paranthesisMap.put('[',']');
        paranthesisMap.put('(',')');
        for(int i=0; i< s.length()-1; i++){
            if(paranthesisMap.containsKey(s.charAt(i))){
                charStack.push(s.charAt(i));
            } else if(!(charStack.pop() == s.charAt(i))){
                return false;
            }
        }
        return charStack.isEmpty();
    }
}
