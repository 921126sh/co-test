// https://app.codility.com/demo/results/trainingVQYJCF-SHS/

function solution(X, A) {
  let rst = -1;
  let tempMap = new Map();

  for (let i = 0; i < A.length; i++) {
    tempMap.set(A[i]);

    if (tempMap.size === X && tempMap.has(X)) {
      rst = i;
      break;
    }
  }

  return rst;
}

// console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
// console.log(solution(5, [3]));
// console.log(solution(1, [1]));
console.log(solution(3, [1, 3, 1, 3, 2, 1, 3]));
