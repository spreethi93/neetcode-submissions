class Solution{
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> result = new HashMap<>();
        for(String s: strs) {
            int[] count = new int[26];
            for(char c: s.toCharArray()) {
                count[c - 'a']++;
            }
            String key = Arrays.toString(count);
            result.putIfAbsent(key, new ArrayList<>());
            result.get(key).add(s);
        }
        return new ArrayList<>(result.values());
    }
}
// class Solution {
//     public List<List<String>> groupAnagrams(String[] strs) {
//         HashMap<String, List<String>> res = new HashMap<>();

//         for(String s: strs) {
//             char[] charArray = s.toCharArray();
//             Arrays.sort(charArray);

//             String sortedStr = new String(charArray);

//             res.putIfAbsent(sortedStr, new ArrayList<>());
//             res.get(sortedStr).add(s);
//         }
//         return new ArrayList<>(res.values());
//     }
// }
