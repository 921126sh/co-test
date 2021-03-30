// https://app.codility.com/demo/results/trainingPPVAAN-7R3/

function solution(X, Y, D) {
  let tempJump = Math.floor((Y - X) / D);
  if (tempJump * D + X < Y) {
    tempJump++;
  }

  return tempJump;
}

console.log(solution(50, 199, 4));
console.log(solution(1, 5, 2));
