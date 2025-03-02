// https://school.programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
  const arr = Array.from({ length: n }, (_, i) => i);

  return arr
    .map(num => {
      if (!(num % 2)) return "수";
      return "박";
    })
    .join("");
}

console.log(solution(3)); // "수박수"
