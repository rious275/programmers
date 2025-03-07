// https://school.programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
  let answer = 0;

  // 소수 구하는 함수
  const isPrime = num => {
    // 2는 무조건 소수 판정
    if (num === 2) return true;
    // 2보다 작거나 짝수는 소수가 아님
    if (num < 2 || num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      for (let k = j + 1; k <= nums.length; k++) {
        if (!nums[i] || !nums[j] || !nums[k]) continue;
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) answer++;
      }
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4])); // 1
