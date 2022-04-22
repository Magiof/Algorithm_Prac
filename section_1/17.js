// 중복 단어 제거

function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer.push(s[i]);
  }
  return answer;
}

// 배열이므로 filter 사용
function solution2(s) {
  return s.filter((v, i) => s.indexOf(v) === i);
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
console.log(solution2(str));
