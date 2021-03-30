// https://app.codility.com/demo/results/trainingGGCAYQ-EQ7/
// 왜 타임아웃인지 모르겠다.

function solution(N, A) {
  rst = new Array(N).fill(0);

  for (let i = 0; i < A.length; i++) {
    if (A[i] === N + 1) {
      rst.fill(Math.max.apply(null, rst));
      continue;
    }

    if (1 <= A[i] <= N) {
      rst[A[i] - 1]++;
    }
  }

  return rst;
}

// X가 1 <= A[i] <= N 증가하지 않는다.
// X가 N + 1 이면 <= i만큼 증가한다.

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4])); // [3,2,2,4,2]
console.log(solution(5, [3])); // [0,0,1,0,0]
// console.log(solution(1, [1]));
// console.log(solution(3, [1, 3, 1, 3, 2, 1, 3]));
