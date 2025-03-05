// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  let answer = 0;

  const absolutesMap = absolutes.map((absolute, i) => {
    if (signs[i]) return absolute;
    return absolute * -1;
  });

  return absolutesMap.reduce((acc, cur) => acc + cur);
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
