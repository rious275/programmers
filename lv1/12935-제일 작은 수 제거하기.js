// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  var answer = arr.filter((num, _, list) => {
    return num !== Math.min(...list);
  });

  return answer.length ? answer : [-1];
}

console.log(solution([4, 3, 2, 1])); // [4,3,2]
