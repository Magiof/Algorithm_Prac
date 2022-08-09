// 공주 구하기
function solution(n, k) {
  let answer = 0;
  let tmp = 1;
  let princes = [...new Array(n)].map((_, i) => i + 1);
  do {
    if (tmp % k !== 0) {
      princes.push(princes.shift());
    } else princes.shift();
    tmp++;
  } while (princes.length !== 1);
  answer = princes[0];
  return answer;
}
let n = 8,
  k = 3;
console.log(solution(n, k));
