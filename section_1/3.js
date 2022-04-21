// n명에게 1자루씩 나눠줄 연필의 다스(12자루) 수 계산

// function solution(n) {
//   let answer = parseInt(n / 12);
//   if (n % 12 !== 0) answer += 1;

//   return answer;
// }

// console.log(solution(178));

function solution(n) {
    let answer = Math.ceil(n / 12);
    return answer;
  }
  
  console.log(solution(178));