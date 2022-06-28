// 학급 회장을 뽑는데 후보는 A B C D E
// 투표용지에 학생들은 본인이 선택한 후보의 기호가 쓰여져 있음
// 발표가 끝난 후 어떤 기호의 후보가 회장이 되었는지 출력
// 반드시 한명의 회장이 선출됨

function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
