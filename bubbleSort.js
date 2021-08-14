// -------------------------------------------Naive Bubble sort 1------------------------------------------

function naivebubbleSort(array){
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


// -------------------------------------------Naive Bubble sort 2------------------------------------------
function bubbleSort(array){
    console.log(array)
    for (let index = array.length; index > 0 ; index--) {
        for (let jndex = 0; jndex <= index-1; jndex++) {
            console.log(array,"||",array[jndex],array[jndex+1])
            if (array[jndex] > array[jndex+1]) 
                [array[jndex],array[jndex+1]] = [array[jndex+1],array[jndex]]          
        }
    }
    return array
}


bubbleSort([11,10,9,8,7,6,5,4,3,2,1,0])