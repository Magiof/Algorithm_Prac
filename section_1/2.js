// 세 변의 길이가 주어졌을 때, 삼각형을 만들 수 있으면 YES, 아니면 NO

function solution(a, b, c) {
  let longest;
  let answer = "YES";
  if (a < b) longest = b;
  else longest = a;
  if (c > longest) longest = c;
  if (longest > a + b + c - longest) answer = "NO";
  return answer;
}

console.log(solution(13, 33, 17));
