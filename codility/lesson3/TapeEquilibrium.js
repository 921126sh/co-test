// https://app.codility.com/demo/results/trainingPZABHQ-VN6/

function solution(A) {
  let rst = 0;

  let leftVal = 0;
  let rightVal = 0;

  let diffrenceVal = 0;

  for (let i = 0; i < A.length - 1; i++) {
    leftVal += A[i];

    if (i === 0) {
      rightVal = A.reduce((cur, next) => cur + next) - A[0];
    } else {
      rightVal = rightVal - A[i];
    }

    diffrenceVal = Math.abs(leftVal - rightVal);
    if (i === 0) {
      rst = diffrenceVal;
    } else {
      rst = rst > diffrenceVal ? diffrenceVal : rst;
    }
  }

  return rst;
}

console.log(solution([1, 2, 3, 4, 2]));
