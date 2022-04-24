//회문 문자열: 앞으로읽으나 뒤로읽으나 같은 문자열
// 회문 문자열이면 "YES", 아니면"NO"출력
// 대소문자 구분x

function solution(s) {
  let reverse = s.split().reverse().join();
  if (s.toUpperCase() === reverse.toUpperCase()) return "YES";
  else return "NO";
}

function solution2(s) {
  let ups = s.toUpperCase();
  let len = ups.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - 1 - i]) return "NO";
  }
  return "YES";
}

let str = "goooG";
console.log(solution(str));
console.log(solution2(str));
