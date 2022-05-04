// 자릿수의 합
// 각 자연수의 자릿수의 합을 구하고 그 합이 최대인 자연수 출력
// 합이 같은 경우 큰 숫자를 답으로 한다.
// 만약 235, 1234 가 동시에 답이 될 수 있으면 1234를 출력

function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp !== 0) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (max < sum) {
      max = sum;
      answer = x;
    } else if (max === sum && answer < x) answer = x;
    sum = 0;
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
