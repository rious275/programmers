// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  let countP = 0;
  let countY = 0;

  for (str of s) {
    const lowerCase = str.toLowerCase();
    if (lowerCase === "p") countP++;
    else if (lowerCase === "y") countY++;
  }

  return countP === countY;
}

console.log(solution("pPoooyY")); // true
