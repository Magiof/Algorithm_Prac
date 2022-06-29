// 아나그램(Anagram) 판별
// AbaAeCe 와 baeeACA는 아나그램이므로 출력은 YES
// 아나그램이 아니면 NO 출력

function solution(str1, str2) {
  let answer = "YES";
  let sH1 = new Map();
  let sH2 = new Map();
  for (let x of str1) {
    if (sH1.has(x)) sH1.set(x, sH1.get(x) + 1);
    else sH1.set(x, 1);
  }
  for (let x of str2) {
    if (sH2.has(x)) sH2.set(x, sH2.get(x) + 1);
    else sH2.set(x, 1);
  }
  for (let [key, val] of sH1) {
    if (sH2.get(key) === val) continue;
    else answer = "NO";
  }
  return answer;
}

function solution2(str1, str2) {
  let answer = "YES";
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}
let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
console.log(solution2(a, b));
