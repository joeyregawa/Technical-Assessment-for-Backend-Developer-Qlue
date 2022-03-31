function findSumNumber(arr, i, n) {
    if (n == 0) {
      let arrtemp = []
        if (arr.length != 1) {
          for (let i = 0; i < arr.length; i++) {
              arrtemp.push(arr[i])
          }
          console.log(arrtemp)
      }
    }

    for (let j = i; j <= n; j++) {
        arr.push(j);
        findSumNumber(arr, j, n - j);
        arr.pop();
    }
}

let n = 4;
let arr = [];
findSumNumber(arr, 1, n);