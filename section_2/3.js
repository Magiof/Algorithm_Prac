//가위바위보
// A,B가 가위바위보 게임을 N번 한다.
// A가 이기면 A, B가 이기면 B 출력, 비기면 D출력
// 1:가위, 2:바위, 3:보

function solution(a, b) {
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      answer.push("D");
    }
    if (Math.abs(a[i] - b[i]) === 1) {
      a[i] > b[i] ? answer.push("A") : answer.push("B");
    }
    if (Math.abs(a[i] - b[i]) === 2) {
      a[i] > b[i] ? answer.push("B") : answer.push("A");
    }
  }
  return answer;
}

function solution2(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += "D" + " ";
    else if (a[i] === 1 && b[i] === 3) answer += "A" + " ";
    else if (a[i] === 2 && b[i] === 1) answer += "A" + " ";
    else if (a[i] === 3 && b[i] === 2) answer += "A" + " ";
    else answer += "B" + " ";
  }
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
console.log(solution2(a, b));
