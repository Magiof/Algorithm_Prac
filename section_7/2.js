// 오름차순 정렬 (버블 정렬)
// 제일 뒤가 제일 먼저 결정 됨

function solution(arr) {
  let answer = arr;
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    }
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
