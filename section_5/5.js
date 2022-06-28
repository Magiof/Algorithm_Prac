// N일동안의 매출기록이 주어진다.
// 연속된 K일 동안의 최대 매출액은?
// N=10이고 10일 간 매출기록이 12 15 11 20 25 10 20 19 13 15 일때
// 연속된 3일간 최대 매출액은 11+20+25=56

function solution(k, arr) {
  let answer = 0;
  for (let i = 0; i < arr.length - k; i++) {
    let sum = 0;
    for (j = 0; j < k; j++) {
      sum += arr[i + j];
      if (sum > answer) answer = sum;
    }
  }
  return answer;
}

function solution2(k, arr) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
console.log(solution2(3, a));
