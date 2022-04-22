// 대문자 개수 세기
function solution(s) {
  let answer = 0;
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}

//아스키코드 넘버를 이용
//대문자: 65~90, 소문자: 97~122
function solution2(s) {
  let answer = 0;
  for (let x of s) {
    let num = x.charCodeAt(); //아스키코드로 변환
    if (num >= 65 && num <= 90) answer++;
  }
}
let str = "KoreaTimeGood";
console.log(solution(str));
console.log(solution2(str));
