// https://school.programmers.co.kr/learn/courses/30/lessons/133499

function solution(babbling) {
  let answer = 0;
  const sounds = ["aya", "ye", "woo", "ma"];

  for (const word of babbling) {
    if (
      word.includes("ayaaya") ||
      word.includes("yeye") ||
      word.includes("woowoo") ||
      word.includes("mama")
    ) {
      // 문제에 있는 예외 처리(연속된 같은 발음)
      continue;
    }

    let str = word;
    // 발음 개수가 아니라 발음이 되는지의 여부이므로 해당 발음을 전체에서 1로 치환
    // 빈 문자열로 하면, "wyeoo" 형태에서 ye가 사라지면 woo가 되기 때문에, 오류가 생김
    for (const sound of sounds) {
      str = str.replaceAll(sound, "1");
    }

    // 삭제 후 빈 문자열이면 발음이 가능
    str = str.replaceAll("1", "");
    if (!str.length) answer++;
  }

  return answer;
}

console.log(solution(["aya", "yee", "u", "maa"])); // 1
