function solution(N) {
  let jinsu = recursive(N);
  jinsu = jinsu.split("1");

  let rst = 0;
  for (let i = 0; i < jinsu.length; i++) {
    if (jinsu[i] !== "" && jinsu[i - 1] !== undefined && jinsu[i + 1] !== undefined) {
      if (rst < jinsu[i].length) {
        rst = jinsu[i].length;
      }
    }
  }

  return rst;
}

function recursive(N) {
  if (N <= 1) {
    return N;
  }

  return recursive(Math.floor(N / 2)) + "" + (N % 2);
}

console.log(solution(1041));
