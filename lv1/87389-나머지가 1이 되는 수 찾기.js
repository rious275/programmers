// https://school.programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
  let answer = 0;

  while (true) {
    if (n % answer === 1) break;
    answer++;
  }

  return answer;
}

console.log(solution(10)); // 3
