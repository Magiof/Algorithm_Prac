// 1부터 n까지의 합

// function solution(n) {
//   if (n % 2 === 0) {
//     return (n + 1) * (n / 2);
//   }
//   return (n + 1) * Math.floor(n / 2) + Math.ceil(n / 2);
// }
// console.log(solution(10));


function solution(n) {
    let answer=0;
    for(let i=1; i<=n; i++){
        answer=answer+i;
    }
    return answer
}