// 그리디
// [회의 시작시간, 종료시간] 의 모음이 배열로 주어진다.
// 겹치지 않고 가장 많이 할 수 있는 회의의 개수 구하기

function solution(meetings) {
  let sortArr = meetings.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  for (let i = 0; i < sortArr.length - 1; i++) {
    if (sortArr[i][1] > sortArr[i + 1][0]) sortArr.splice(i + 1, 1);
  }
  return sortArr.length;
}

let meetings = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
let meetings2 = [
  [1, 3],
  [2, 3],
  [3, 3],
];
console.log(solution(meetings));
console.log(solution(meetings2)); // expected output: 2
