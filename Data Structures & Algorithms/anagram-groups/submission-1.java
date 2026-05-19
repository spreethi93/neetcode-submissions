class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> accSublist = new ArrayList<>();
        Set<Integer> visitedIndices = new HashSet<>();

        for(int i=0; i<strs.length; i++) {
            if (visitedIndices.contains(i)) continue;

            visitedIndices.add(i);
            List<String> tempList = new ArrayList<>();
            tempList.add(strs[i]);

            for(int j=i+i; j<strs.length; j++){
                if(!visitedIndices.contains(j) && isAnagram(strs[i], strs[j])) {
                    tempList.add(strs[j]);
                    visitedIndices.add(j);
                }
            }
            accSublist.add(tempList);
        }
        return accSublist;
    }

    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()) {
            return false;
        }

        HashMap<Character, Integer> countS = new HashMap<>();
        HashMap<Character, Integer> countT = new HashMap<>();

        for(int i=0; i<s.length(); i++) {
            countS.put(s.charAt(i), countS.getOrDefault(s.charAt(i), 0) + 1);
            countT.put(t.charAt(i), countT.getOrDefault(t.charAt(i), 0) + 1);
        }

        return countS.equals(countT);
    }
}
