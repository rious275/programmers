// https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  return String(n)
    .split("")
    .map(numStr => Number(numStr))
    .reverse();
}

console.log(solution(12345));
