// 10부제(자동차 번호 일의 자리 숫자가 3이면
// 3일,13일,23일에 운행 못함)
// 위반한 자동차의 대수 출력

function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 === day) answer++;
  }
  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
