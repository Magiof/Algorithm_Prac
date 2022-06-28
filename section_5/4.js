// N개의 수로 이루어진 수열이 주어진다.
// 주어진 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지
// 만약 N=5, M=5, 수열은 1 3 1 2 3 라면
// 합이 5이하가 되는 연속부분수열은
// {1} {3} {1} {2} {3} {1,3} {3,1} {1,2} {2,3} {1,3,1}로 총 10가지

function solution(m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
