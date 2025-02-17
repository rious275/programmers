// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map(word =>
      [...word].map((char, i) => (i % 2 ? char : char.toUpperCase())).join("")
    )
    .join(" ");
}

console.log(solution("try hello world")); // TrY HeLlO WoRlD
