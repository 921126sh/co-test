//https://app.codility.com/demo/results/trainingTY7DV6-HTH/

function solution(A, K) {
  rst = new Array(A.length);
  for (let i = 0; i < A.length; i++) {
    rst[(i + K) % A.length] = A[i];
  }

  return rst;
}

console.log(solution([3, 8, 9, 7, 6], 3));
