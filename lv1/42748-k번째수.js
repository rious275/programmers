// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    const start = commands[i][0];
    const end = commands[i][1];
    const order = commands[i][2];
    answer.push(array.slice(start - 1, end).sort((a, b) => a - b)[order - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
); // [5, 6, 3]
