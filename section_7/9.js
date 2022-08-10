// 그리디
// 입장시간 퇴장시간이 주어짐
// 입장시간에는 존재하는것, 퇴장시간에는 존재하지 않는것으로 한다.
// 동시에 가장 많이 존재하는 최대 인원수 구하기

function solution(people) {
  let answer = 0;
  let curruntPeople = [];
  let T_line = [];
  for (let x of people) {
    T_line.push([x[0], "s"]);
    T_line.push([x[1], "e"]);
  }
  T_line.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  for (let x of T_line) {
    if (x[1] === "s") {
      curruntPeople.push(1);
      if (curruntPeople.length > answer) answer = curruntPeople.length;
    } else curruntPeople.pop();
  }
  return answer;
}

let people = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(people));
