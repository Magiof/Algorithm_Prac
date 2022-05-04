// 뒤집은 소수
// 자연수를 뒤집은 후 그 수가 소수이면 그 소수를 출력

// 소수 판별
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x !== 0) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
