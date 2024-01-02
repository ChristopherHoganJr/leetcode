/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  let total = 0;
  counter = 0;
  const vals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    if (vals[s[i]] == 1 && (vals[s[i + 1]] == 5 || vals[s[i + 1]] == 10)) {
      total += vals[s[i + 1]] - vals[s[i]];
      i++;
      continue;
    }
    if (vals[s[i]] == 10 && (vals[s[i + 1]] == 50 || vals[s[i + 1]] == 100)) {
      total += vals[s[i + 1]] - vals[s[i]];
      i++;
      continue;
    }
    if (
      vals[s[i]] == 100 &&
      (vals[s[i + 1]] == 500 || vals[s[i + 1]] == 1000)
    ) {
      total += vals[s[i + 1]] - vals[s[i]];
      i++;
      continue;
    }

    total += vals[s[i]];
  }

  return total;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("LIV")); // 54
console.log(romanToInt("MCMXCIV")); // 1994
