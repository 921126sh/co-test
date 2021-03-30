// https://app.codility.com/demo/results/trainingGSS9VY-T8U/

function solution(A) {
  let tempArr = [];
  let rst = 1;

  for (const i in A) {
    if (A[i] > 0) {
      tempArr[A[i]] = A[i];
    }
  }

  for (let i = 1; i < tempArr.length; i++) {
    if (tempArr[i] == undefined) {
      rst = i;
      break;
    }
    if (i == tempArr.length - 1) {
      rst = tempArr.length;
    }
  }

  return rst;
}

console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([1, 2, 3])); // 4
console.log(solution([-1, -3])); // 1
console.log(solution([3, 4, 7, 8])); // 1
