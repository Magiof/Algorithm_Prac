// a문자열의 순서가 b에서도 같다면 YES,아니라면 NO 출력
function solution(a, b) {
  let answer = [];
  for (let x of a) {
    if (b.indexOf(x) > -1) {
      answer.push(b.indexOf(x));
    } else return "NO";
  }
  for (let i = 0; i < answer.length - 1; i++) {
    if (answer[i] > answer[i + 1]) return "NO";
  }
  return "YES";
}

function solution2(a, b) {
  let answer = "YES";
  let queue = [...a];
  for (let x of b) {
    if (x === queue[0]) queue.shift();
  }
  queue.length === 0 ? (answer = answer) : (answer = "NO");
  return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
console.log(solution2(a, b));
