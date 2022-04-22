//대소문자 변환

function solution(s) {
  let answer = "";
  for (let x of s) {
    x === x.toUpperCase()
      ? (answer += x.toLowerCase())
      : (answer += x.toUpperCase());
  }
  return answer
}

console.log(solution("StuDY"));