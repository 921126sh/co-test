// 정렬 종류
/**
 * 선택: 작은 값을 선택하여 정렬
 * 삽입: 정렬중인 배열에 삽입
 * 병합: n개의 배열로 나눈 후 각 그룹의 작은 값 끼리 비교하여 정렬
 * 퀵: 병합과 비슷(특정 기준으로 나눔)
 */



/// 선택 정렬
// let xxx = (sortArr, iNumber) => {
//     for (const i in sortArr) {
//         if(iNumber < sortArr[i]) {
//             return i;
//         }
//     }

//     return sortArr.length;
// }
 
//  let sortArr = [];
// ((arr) => {
//     for (let i = 0, loopCnt = arr.length; i < loopCnt; i++) {
//         let idx = xxx(sortArr, arr[i]);

//         sortArr.splice(idx, 0, arr[i]);
        
//     }

  
//     console.log(sortArr)
// })([5, 10, 66, 77, 54, 32, 11, 15]);
/// 선택 정렬


/// 병합정렬(O(nLogn))
 
function complexSort(arr) {
    let rst = [];

    if (arr.length <= 1) {
        return arr;
    }

    let middleNumber = parseInt(arr.length / 2);
    let groupOne = complexSort(arr.slice(0, middleNumber));
    let groupTwo = complexSort(arr.slice(middleNumber, ));

    while (groupOne.length != 0 && groupTwo.length != 0) {
        if (groupOne[0] < groupTwo[0]) {
            rst.push(groupOne.shift());
        }
        else {
            rst.push(groupTwo.shift());
        }
    }

    while (groupOne.length != 0) {
        rst.push(groupOne.shift());

    }

    while (groupTwo.length != 0) {
        rst.push(groupTwo.shift());

    }

    return rst;
}

// console.log(complexSort([5, 10, 66, 77, 54, 32, 11, 15]))
 

/// 병합정렬(O(nLogn))



/// 퀵정렬(workst - O(nLog2n), best - O(n**2))

function quickSort(arr) {
    letarrLen = arr.length;
    
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = [arr.shift()];
    let groupOne = [];
    let groupTwo = [];

    for (const i in arr) {
        if (arr[i] < pivot) {
            groupOne.push(arr[i]);
        }
        else {
            groupTwo.push(arr[i]);
        }
    }

    return quickSort(groupOne).concat(pivot, quickSort(groupTwo))

}

console.log(quickSort([5, 10, 66, 77, 54, 32, 11, 15]))

/// 퀵정렬(workst - O(nLog2n), best - O(n**2))
