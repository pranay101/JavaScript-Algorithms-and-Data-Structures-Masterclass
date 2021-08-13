function bubbleSort(array){
    for (let index = 0; index < array.length; index++) {
        for (let jndex = index+1; jndex < array.length; jndex++) {
            if (array[index] > array[jndex]) {
                let temp = array[index]
                array[index] = array[jndex]
                array[jndex] = temp
            }
            
        }
    }
    return array
}


console.log(bubbleSort([9,6565443,4,3,786755,7,8,4,3,6,7,8,9,9,5,4,3212,4536,123,3,3,3,4555,6,788,5,]))