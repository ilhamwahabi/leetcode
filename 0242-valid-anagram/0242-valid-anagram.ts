function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const map = {}

  for (let letter of s) {
    if (!map[letter]) map[letter] = 1;
    else map[letter]++
  }

  for (let letter of t) {
    if (!map[letter]) return false;
    else map[letter]--; map[letter] === 0 && delete map[letter]
  }

  return true
};