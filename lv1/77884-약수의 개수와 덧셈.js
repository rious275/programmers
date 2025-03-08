// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    const numLength = [];
    let num = 1;
    while (num <= Math.sqrt(i)) {
      if (i % num === 0) {
        numLength.push(i);
        if (i / num !== num) numLength.push(i / num);
      }
      num++;
    }

    if (!(numLength.length % 2)) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}

console.log(solution(13, 17)); // 43
