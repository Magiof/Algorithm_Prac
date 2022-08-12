// 이분검색
// arr에서 n은 몇번째로 작은 수 인가?

function solution(arr, n) {
  let answer;
  let tmp = arr.sort((a, b) => a - b);
  let lt = 0;
  let rt = arr.length - 1;
  while (lt<=rt) {
    let mid = parseInt((lt + rt) / 2);
    if (tmp[mid] === n) {
      answer = mid + 1;
      break;
    } else if (tmp[mid] > n) rt = mid;
    else if (tmp[mid] < n) lt = mid;
  }
  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
let n = 32;
console.log(solution(arr, n));
