// 주어진 문자열을 대문자로 변환

function solution(s) {
  return s.toUpperCase();
}

function solution2(s){
    let answer="";
    for(let x of s){
        let num=x.charCodeAt();
        if(num>=97 && num <=122) answer+=String.fromCharCode(num-32);
        else answer+=x;
    }
}
let str = "ItisTimeToStudy";
console.log(solution(str));
console.log(solution2(str));
