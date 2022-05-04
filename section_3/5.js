// 문자열 압축
// 같은 문자가 연속으로 반복되면 오른쪽에 반복 횟수 표기하는 방법으로 압축
// 단 반복횟수가 1인 경우 생략

function solution(s) {
  let str = s.split("");
  let cnt = 1;
  let answer = str[0];
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      cnt++;
    } else {
      if (cnt !== 1) {
        answer += cnt;
      }
      answer += str[i + 1];
      cnt = 1;
    }
  }
  return answer;
}

function solution2(s) {
  let answer = "";
  let cnt = 1;
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
