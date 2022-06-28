// N개의 수로 이루어진 수열이 주어진다.
// 주어진 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지
// 만약 N=8, M=6, 수열은 1 2 1 3 1 1 1 2 라면
// 합이 6이 되는 연속부분수열은
// {2,1,3} {1,3,1,1} {3,1,1,1}로 총 3가지

function solution(m, arr) {
  let answer = (lt = sum = 0);
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
