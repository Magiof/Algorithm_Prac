// 큰 수 출력하기
// 자신의 바로 앞 수보다 큰 수만 출력
// 첫번째 수는 무조건 출력

function solution(arr) {
  let answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) answer.push(arr[i]);
  }
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
