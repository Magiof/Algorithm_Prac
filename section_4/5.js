// k번째 큰 수
// 1~100 사이 자연수가 적힌 n장의 카드. 같은 숫자 카드가 여러장 있을 수 있음
// 이 중 3장을 뽑아 각 카드의 수를 합한 값을 기록
// 기록한 값 중 k번째로 큰 수를 출력

function solution(n, k, card) {
  let tmp = new Set();
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  // Set 자료구조는 sort를 지원하지 않으므로 배열로 만든 후 sort
  let a = Array.from(tmp).sort((a, b) => b - a);
  return a[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
// ★ 중복을 제외하는 자료구조는 set!
