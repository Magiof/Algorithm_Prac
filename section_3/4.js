// 문자거리
// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가
// 문자 t와 떨어진 최소거리를 출력
// 입력: teachermode e
// 출력: 1 0 1 2 1 0 2 2 1 0

function solution(s, t) {
  let answer = [];
  let idx = [];
  let i = 0;
  do {
    let a = s.indexOf(t, i);
    if (idx[idx.length - 1] !== a) idx.push(a);
    i++;
  } while (s.indexOf(t, i) > -1);
  // 4line의 예시에 따르면 idx=[1,5,10]
  for (let i = 0; i < s.length; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < idx.length; j++) {
      if (min > Math.abs(i - idx[j])) {
        min = Math.abs(i - idx[j]);
      }
    }
    answer.push(min);
  }
  return answer;
}

function solution2(s, t) {
  answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
console.log(solution2(str, "e"));
