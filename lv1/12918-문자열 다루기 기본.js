// https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  return /^\d+$/.test(s);
}

console.log(solution("a234")); // false
