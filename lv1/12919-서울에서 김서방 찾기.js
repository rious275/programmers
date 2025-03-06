// https://school.programmers.co.kr/learn/courses/30/lessons/12919

function solution(seoul) {
  let kimIndex = 0;

  seoul.forEach((firstName, index) => {
    if (firstName === "Kim") {
      kimIndex = index;
    }
  });

  return `김서방은 ${kimIndex}에 있다`;
}

console.log(solution(["Jane", "Kim"])); // "김서방은 1에 있다"
