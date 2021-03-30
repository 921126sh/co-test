function solution(A) {
  let rst = null;
  let tempNum = 0;

  while (true) {
    tempNum = A.splice(0, 1)[0];
    if (A.indexOf(tempNum) !== -1) {
      A.splice(A.indexOf(tempNum), 1);
      console.log(A);
    } else {
      rst = tempNum;
    }

    if (rst != null) {
      break;
    }
  }

  return rst;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
