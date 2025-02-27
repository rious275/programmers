// https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  const half = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    return s[half - 1] + s[half];
  }

  return s[half];
}

console.log(solution("qwer")); // "er"
