// 결정 알고리즘(이분 검색)

/*==========================================================
노래들을 dvd에 수록하는데 m 장에 나눠 담는다.
정해진 순서를 바꾸지 않고 dvd의 재생시간을 가장 짧게 담을 수 있는 시간은?
===========================================================*/

function count(songs, capacity) {
  let cnt = 1,
    sum = 0;
  for (let x of songs) {
    if (sum + x <= capacity) sum += x;
    else {
      sum = x;
      cnt++;
    }
  }
  return cnt;
}

function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1; // 기존 rt보다 크고 mid 보다 작은값은 전부 답이 될수 있으므로 더 좋은 값을 찾는다.
    } else lt = mid + 1;
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
