// 보이는 학생
// 학생을 일렬로 세워 일렬로 키가 앞에서부터 순서대로 주어질 때,
// 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수

function solution(arr) {
  let answer = 1,
    cansee = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > cansee) {
      cansee = arr[i];
      answer++;
    }
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
