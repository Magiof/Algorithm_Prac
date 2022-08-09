// 삽입 정렬 응용
// 카카오 캐시 문제 변형

function solution(s, tasks) {
  let answer = Array.from({ length: s }, () => 0);
  for (let x of tasks) {
    let j;
    if (answer.indexOf(x) === -1) {
      for (j = answer.length - 1; j > 0; j--) {
        answer[j] = answer[j - 1];
      }
    } else {
      for (j = answer.indexOf(x); j > 0; j--) {
        answer[j] = answer[j - 1];
      }
    }
    answer[0] = x;
    console.log(answer);
  }
  return answer;
}

let s = 5;
let tasks = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(s, tasks));
