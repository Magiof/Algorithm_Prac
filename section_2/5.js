// 등수구하기
// 점수가 입력되면 등수를 입력된 순서대로 출력
// 92점으로 1등이 3명이면 91점은 4등
function solution(arr) {
  let answer = [],
    cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) cnt++;
    }
    answer.push(cnt + 1);
    cnt = 0;
  }
  return answer;
}

function solution2(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

arr = [87, 88, 92, 100, 76];
arr2 = [92, 92, 92, 100, 76];
console.log(solution(arr));
console.log(solution(arr2));
console.log(solution2(arr));
console.log(solution2(arr2));
