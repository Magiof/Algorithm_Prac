// 주어진 배열의 홀수들의 합과 홀수 중 최소값

// function solution(arr) {
//   let odd = arr.filter((n) => n % 2 !== 0);
//   let min = odd[0];
//   let sum = 0;
//   for (i = 0; i < odd.length; i++) {
//     if (min > odd[i]) {
//       min = odd[i];
//     }
//     sum += odd[i];
//   }
//   let answer = [sum, min];
//   return answer;
// }

// arr = [12, 77, 38, 41, 53, 92, 85];
// console.log(solution(arr));

function solution(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer
}
arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
