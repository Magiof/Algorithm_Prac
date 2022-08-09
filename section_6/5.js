// 쇠막대기 레이저 절단 (설명 생략)

function solution(a) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "(") stack.push(a[i]);
    else {
      stack.pop();
      if (a[i - 1] === "(") {
        answer += stack.length;
      } else answer += 1;
    }
  }
  return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));

let b = "(((()(()()))(())()))(()())";
console.log(solution(b));
