function bubbleSort(array){
    console.log(array)
    for (let index = 0; index < array.length; index++) {
        for (let jndex = index+1; jndex < array.length; jndex++) {
            if (array[index] > array[jndex]) 
                [array[index],array[jndex]] = [array[jndex],array[index]]          
        }
    }
    console.log(array)
    return array
}


console.log(bubbleSort([11,10,9,8,7,6,5,4,3,2,1,0]))