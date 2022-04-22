// 가장 긴 문자열

function solution(s) {
  let answer = "";
  let newarr = s.map((n) => n.length);
  let max = Math.max(...newarr);
  answer = s[newarr.indexOf(max)];
  return answer;
}

function solution2(s) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
console.log(solution2(str));
