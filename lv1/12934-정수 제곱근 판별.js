// https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
  let answer = -1;

  const sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt)) {
    return (sqrt + 1) ** 2;
  }

  return answer;
}

console.log(solution(121)); // 144
