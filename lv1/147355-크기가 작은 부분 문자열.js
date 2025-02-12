// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
  let answer = 0;

  for (let i = 0; i < t.length; i++) {
    // 문자열을 3개씩 자르기
    const numStr = t.substring(i, p.length + i);

    // p와 길이가 다르면 다음 반복문 실행
    if (numStr.length !== p.length) continue;

    // p보다 작거나 같으면 카운트
    if (Number(numStr) <= Number(p)) {
      answer++;
    }
  }

  return answer;
}

console.log("result", solution("10203", "15"));
