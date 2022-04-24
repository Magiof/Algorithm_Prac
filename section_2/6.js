// 격자판 최대합
function solution(arr) {
  let answer = (sum1 = sum2 = sum3 = sum4 = 0);
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    sum3 += arr[i][i];
    sum4 += arr[i][n - 1 - i];
    console.log(sum1, sum2, sum3, sum4);
    answer = Math.max(answer, sum1, sum2, sum3, sum4);
    sum1 = sum2 = 0;
  }
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
