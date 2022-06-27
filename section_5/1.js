/*==오름차순인 두 배열을
오름차순으로 합쳐 출력==*/

// Two pointers Algorithm

function solution(arr1, arr2) {
  const sumlength = arr1.length + arr2.length;
  answer = [];
  while (answer.length < sumlength) {
    let p1 = arr1[0];
    let p2 = arr2[0];
    if (p1 <= p2) {
      answer.push(p1);
      arr1.shift();
    } else {
      answer.push(p2);
      arr2.shift();
    }
  }
  return answer;
}

function solution2(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = p2 = 0;
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) {answer.push(arr1[p1]); p1++} // arr1[p1]을 넣고 p1을 1 증가함
    else {answer.push(arr2[p2++])}; //arr2[p2]을 넣고 p2를 1 증가함
  }
  while(p1<n) answer.push(arr1[p1++]);
  while(p2<m) answer.push(arr2[p2++]);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
console.log(solution2(a, b));
