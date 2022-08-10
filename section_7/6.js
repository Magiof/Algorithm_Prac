// 서로 바껴서 정렬이 잘못된곳 찾기

function solution(arr) {
  let answer = [];
  let sortedArr = arr.slice(); // 얕은 복사
  sortedArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) answer.push(i + 1);
  }
  return answer;
}

let a = [120, 125, 152, 130, 135, 135, 143, 127, 160];
let b = [120, 130, 150, 150, 130, 150];
console.log(solution(a));
console.log(solution(b));
