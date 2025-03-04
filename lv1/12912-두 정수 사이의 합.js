// https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
  let answer = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }

  return answer;
}

console.log("result", solution(5, 3)); // 12
