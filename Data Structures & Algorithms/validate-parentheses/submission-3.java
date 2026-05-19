class Solution {
    public boolean isValid(String s) {
        Stack<Character> charStack = new Stack<>();
        Map<Character, Character> paranthesisMap = new HashMap<>();
        paranthesisMap.put('{', '}');
        paranthesisMap.put('[',']');
        paranthesisMap.put('(',')');
        for(int i=0; i< s.length(); i++){
            char c = s.charAt(i);
            if(paranthesisMap.containsKey(c)){
                charStack.push(c);
            } else if(charStack.isEmpty() || (paranthesisMap.get(charStack.pop()) != c)){
                return false;
            }
        }
        return charStack.isEmpty();
    }
}
