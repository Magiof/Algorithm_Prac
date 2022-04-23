// 점수 계산
// ox문제의 시험에서 연속으로 맞히면 가산점을 준다.
// 연속으로 k문제를 맞히면 k점 틀리면0점을 준다.
// 맞힌 문제는 1, 틀린문제는 0 으로 표기

function solution(arr) {
  let answer = arr[0],
    cnt = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
