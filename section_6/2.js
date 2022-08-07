// 소괄호 ( ) 사이에 존재하는 모든 문자 제거.
// 남은 문자만 출력

function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  answer = stack.join("");
  return answer;
}

let s = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(s));
