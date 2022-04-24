// 숫자만 추출
// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출해
// 순서대로 자연수를 만든다.
// tge0a1h205er이면 0,1,2,0,5 이고 자연수는 1205

function solution(str) {
  let answer = "";
  answer = str.replace(/[^0-9]/g, "");
  return answer / 1;
}

function solution2(str) {
  let answer = 0;
  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
console.log(solution2(str));
