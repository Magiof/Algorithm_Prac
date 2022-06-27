// 두 배열의 공통 원소를 추출하여 오름차순으로 출력

function solution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  while (arr1.length != 0 && arr2.length != 0) {
    if (arr1[0] === arr2[0]) {
      answer.push(arr1[0]);
      arr1.shift();
      arr2.shift();
    } else if (arr1[0] < arr2[0]) {
      arr1.shift();
    } else if (arr1[0] > arr2[0]) {
      arr2.shift();
    }
  }
  return answer;
}

function solution2(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = (p2 = 0);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
}
let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
console.log(solution2(a, b));
