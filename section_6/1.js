// 괄호가 입력되면 올바른 괄호이면 "YES", 올바르지 않으면 "NO" 출력

function solution(s) {
  let answer = "YES";
  let stack = [];
  for (x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length) return "NO";
  return answer;
}

let a = "(()(()))(()";
let b = "(())())";
let c = "(())(())()";
console.log(solution(a));
console.log(solution(b));
console.log(solution(c));
