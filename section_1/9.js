// 대문자로 이루어진 영단어가 입력되면 그 중 A를 #으로 바꾸기

// function solution(str) {
//   let answer = str;
//   for (let i = 0; i < str.length; i++) {
//     answer = answer.replace("A", "#");
//   }
//   return answer;
// }

// let str = "BANANA";
// console.log(solution(str));

function solution(s) {
  let answer;
  for (let x of s) {
    if (x === "A") answer += "#";
    else answer += x;
  }
  return answer;
}

function solution2(s) {
  let answer = s;
  answer = answer.replace(/A/g, "#");
  return answer;
}

let str = "BANANA";
console.log(solution(str));
console.log(solution2(str));
