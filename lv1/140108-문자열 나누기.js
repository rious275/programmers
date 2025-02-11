// https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
  let answer = 0;
  let baseStr = "";
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < s.length; i++) {
    // 기준 문자열이 없다면 등록하기
    if (!baseStr) baseStr = s[i];

    // 기준 문자열과 같으면 count1, 다르면 count2
    if (baseStr === s[i]) count1++;
    else count2++;

    // count1, 2가 같아지면 초기화
    if (count1 === count2) {
      answer++;
      count1 = 0;
      count2 = 0;
      baseStr = "";
    }
  }

  // 마지막까지 체크하고, 남은 문자열이 있다면 카운트
  if (baseStr !== "") {
    answer++;
  }

  return answer;
}

console.log("result", solution("aaabbaccccabba"));
