//크레인 인형뽑기 (카카오 기출)

function solution(board, moves) {
  let answer = 0;
  let stack = [];
  for (let x of moves) {
    j = x - 1;
    for (let i = 0; i < board.length; i++) {
      if (board[i][j] !== 0) {
        if (stack[stack.length - 1] === board[i][j]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(board[i][j]);
        }
        board[i][j] = 0;
        break;
      }
    }
  }
  return answer;
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));
