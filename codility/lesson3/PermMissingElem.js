// https://app.codility.com/demo/results/training5M7YF6-4BC/

function solution(A) {
  return A.length == 0 ? 1 : Math.floor(((A.length + 2) * (A.length + 1)) / 2) - A.reduce((cur, val) => cur + val);
}

console.log(solution([]));

console.log(solution([1, 4, 2, 5, 7, 8, 6, 9]));
