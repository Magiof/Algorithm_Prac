// 팰린드롬(===회문문자열)
// 알파벳 이외 문자 무시
// 대소문자 구분 x

function solution(s) {
  let newstr = s.replace(/[^a-zA-Z]/g,'').toLowerCase();
  if(newstr === newstr.split().reverse().join()) return "YES"
  else return "NO"
}
let str = "found7, time: study; Yduts; emit, 70nuof";
console.log(solution(str));
