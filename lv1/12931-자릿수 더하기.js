// https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  return String(n)
    .split("")
    .reduce((cur, acc) => Number(cur) + Number(acc), 0);
}

console.log(solution(123)); // 6
