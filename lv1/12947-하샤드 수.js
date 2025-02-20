// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  const numArr = String(x).split("");
  let count = 0;

  for (let i = 0; i < String(x).length; i++) {
    count += Number(numArr[i]);
  }

  return !(x % count);
}

console.log(solution(11));
