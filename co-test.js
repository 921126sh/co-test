

// function solution(N, K, A, B, C) {
//     let rst = [];
//     for (let i = 0; i < A.length; i++) {
//         for (let j = A[i]; j < B[i] + 1; j++) {
//             if (!rst[j - 1]) {
//                 rst[j - 1] = [];
//             }

//             rst[j - 1].push(C[i]);
//         }
//     }

//     let cnt = 0;
//     for (const idx in rst) {
//         el = rst[idx];

//         if (el == undefined || el.length > K || el.length < K) continue;

//         let isPass = true;
//         for (let i = 0; i < K; i++) {
//             if (el[i] !== undefined && el[i] !== i + 1) {
//                 isPass = !isPass
//                 break;
//             }
//         }

//         if (isPass) cnt++;
//     }

//     return cnt;
// }


// // console.log(solution(5, 3, [1, 1, 4, 1, 4], [5,2,5,5,4], [1,2,2,3,3]))
// console.log(solution(6, 2, [2], [4], [1]))

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

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

    return recursive(Math.floor(N / 2)) + "" + (N % 2)
}

console.log(solution(1041))