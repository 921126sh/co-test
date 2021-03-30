/**
 * 비어있지 않는 배열 제공
 * 1부터 N까지 요소를 한번만 포함하는 시퀀스
 *
 * .. 아니 요소를 한번만 포함한다며? 마지막 케이스 뭐임
 */
// https://app.codility.com/demo/results/trainingSRMYTY-42R/
function solution(A) {
  let qSum = A.reduce((curV, nextV) => curV + nextV);

  let tempMaxV = Math.max.apply(null, A);
  let wantSum = ((tempMaxV + 1) * tempMaxV) / 2;

  console.log(qSum);
  console.log(wantSum);
  return qSum !== wantSum ? 0 : 1;
}

// console.log(solution([4, 1, 3, 2])); // 1
// console.log(solution([4, 1, 3])); // 0
// console.log(solution([8, 7, 6, 5, 4, 3, 2, 1])); // 1
// console.log(solution([8, 7, 6, 5, 4, 3, 2])); // 0
console.log(solution([9, 5, 7, 3, 2, 7, 3, 1, 10, 8])); // 0
