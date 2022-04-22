// 일곱난장이
// 주어진 배열에서 합이 100이되는 7개의 원소 찾기
// function solution(arr) {
//   let answer = [];
//   for (let i = 0; i < arr.length; i++) {
//     answer = arr;
//     answer = arr.filter(n => n !== arr[i]);
//     let a = answer
//     for (let j = 0; j < arr.length - 1; j++) {
//         let answer = a;
//       answer = answer.filter(n => n !== answer[j]);
//       if (answer.reduce((a, b) => a + b) === 100) return answer;
//     }
//   }
// }

// let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
// console.log(solution(arr));

function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        return answer;
      }
    }
  }
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
