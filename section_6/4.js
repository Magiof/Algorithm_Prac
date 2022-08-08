// 후위식 연산 결과 찾기

function solution(s) {
  let answer;
  let stack = [];

  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      stack.push(eval(lt + x + rt));
    }
  }
  answer = stack[0];
  return answer;
}
let str = "352+*9-";
console.log(solution(str));
