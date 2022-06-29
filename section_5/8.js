// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하라
// 아나그램 판별시 대소문자 구분
// 부분문자열은 연속된 문자열

/*=====================나의 풀이=====================*/
function compareStrings(str1, str2) {
  let sH1 = new Map();
  let sH2 = new Map();
  for (x of str1) {
    if (sH1.has(x)) sH1.set(x, sH1.get(x) + 1);
    else sH1.set(x, 1);
  }
  for (x of str2) {
    if (sH2.has(x)) sH2.set(x, sH2.get(x) + 1);
    else sH2.set(x, 1);
  }
  console.log(sH1, sH2);
  for (let [key, val] of sH1) {
    if (sH2.get(key) === val) continue;
    else return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  for (let i = 0; i < s.length - t.length + 1; i++) {
    let str1 = s.substr(i, t.length);
    let str2 = t;
    if (compareStrings(str1, str2) === true) {
      answer++;
    }
    console.log(str1, str2, answer);
  }
  return answer;
}

/*=====================다른 풀이=====================*/

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

function solution2(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
console.log(solution2(a, b));
