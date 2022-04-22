// 입력받은 문자열에 특정 문자가 몇개인지 출력

function solution(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;
}

function solution2(s, t) {
  let answer = s.split(t).length;
  return answer - 1;
}
let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
console.log(solution2(str, "R"));
