// function power(a, b) {
//     let result = 1;
//     while(b > 0) {
//       if((b % 2) > 0) {
//         result = result * a;
//       } 
//       a = a * a;
//       b = Math.floor(b / 2);
//     }
//     return result;
//   }

// if(0) {
//     console.log(1);
// }
// function power(a, b) {
//         let result = a;
//         while(b > 1) {
//           result = result * result;    
//           if(((b/2) % 2 && b != 2) > 0) {
//              result = result * a;
//           } 
//           b = Math.floor(b / 2);
//         }
//         return result;
//       }
    
    //  console.log(power(2,25));

// console.log(power(2, 3)); // 8
// console.log(power(5, 2)); // 25
// console.log(power(4, 1)); // 4
// console.log(power(10, 0)); // 1
 
// console.log(power(2, 7)); // 128


// P   A   H   N
// A P L S I I G
// Y   I   R
// Output: "PAHNAPLSIIGYIR"


// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */
// var convert = function(s, numRows) {
//     const result = [];
//     let pointer = 0;
//     let isReverse = false;
//     for(let i = 0;i< s.length; i++) {
//        if(!result[pointer]) result[pointer] = [];
//        result[pointer].push(s[i]);
//        pointer = !isReverse ? ++pointer : --pointer;
//        if(pointer === 0 || pointer === numRows - 1) {
//          isReverse = !isReverse;
//        }
//     }
//     console.log(result)
//     return [].concat(...result).join('');
// };


// console.log(convert("PAYPALISHIRING",3));


function mergeSort(arr) {
    const half = arr.length / 2;
  
    // the base case is array length <=1
    if (arr.length <= 1) {
      return arr;
    }
  
    const left = arr.splice(0, half); // the first half of the array
    const right = arr;
    return merge(left, right);
  }

  function merge(left, right) {
    let sortedArr = []; // the sorted elements will go here
  
    while (left.length && right.length) {
    // insert the smallest element to the sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
  
    // use spread operator and create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right];
  }


  console.log(mergeSort([5,4,2,7,1,2,52,12,]));



//   5 4 | 2 7 | 1 2 | 52 12

//   4 5 | 2 7 | 1 2 | 12 52
  
//   2 4 5 7     