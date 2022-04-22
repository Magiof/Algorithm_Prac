// 가운데 문자 출력
// 짝수일 경우 가운데 2개의 문자 출력

function solution(s) {
  let answer = "";
  s.length % 2 === 0
    ? (answer = s[s.length / 2 - 1] + s[s.length / 2])
    : (answer = s[Math.floor(s.length / 2)]);
  return answer;
}

function solution2(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  //s.substring(3,5)면 s의 3번인덱스부터 5번인덱스 전까지
  //s.substr(3,5)면 s의 3번인덱스부터 5개
  return answer;
}

console.log(solution("study"));
console.log(solution("qqqqqqqqqqpqqqqqqqqqq"));
console.log(solution("wwwwwvvwwwww"));
