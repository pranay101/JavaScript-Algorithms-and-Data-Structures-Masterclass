// ---------------------------------------Helper Function------------------------------------------------
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }

function digitCount(num) {
    if (num === 0 ) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
 function mostDigits(array) {
     let maxdigit=0
     array.forEach(element => {
         maxdigit = Math.max(maxdigit,digitCount(element))
     });
     return maxdigit
 }



 // ---------------------------------------Main Function------------------------------------------------
 function radixSort(array) {
    let maxDigit = mostDigits(array)
    for (let k = 0; k < maxDigit; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < array.length; i++){
            let digit = getDigit(array[i],k);
            digitBuckets[digit].push(array[i]);
        }
        array  = [].concat(...digitBuckets)
    }
    return array
 }
console.log(radixSort([3456,456,44,323,123,123456]));