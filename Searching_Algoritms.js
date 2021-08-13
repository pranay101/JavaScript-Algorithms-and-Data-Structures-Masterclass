// ---------------------------------------------Linear Searching-------------------------------------------------

function linear_search(arr,element)
{
    for(let i =0; i<arr.length; i++)
    {
        if(arr[i] === element)
            return i
    }
    return -1
}

// Similar function is javaScript that uses linear linear_search
// find()
// indexof()
// findindex()
// includes()
// --------------------------------------------------------------------------------------------------------------



// ---------------------------------------------Binary Searching-------------------------------------------------

function binary_search(arr,element)
{
    let high = arr.length-1;
    let low = 0
    let middle = Math.floor((low+high)/2);
    while(arr[middle] !==  element && low <= high)
    {
        
        if(arr[middle] > element)
            high =  middle-1
        if(arr[middle] < element)
            low = middle +1
        middle = Math.floor((low+high)/2);
    }
    if(arr[middle] === element)
        return middle
    else 
        return -1
}

// --------------------------------------------------------------------------------------------------------------




// -----------------------------------------Naive String Searching-------------------------------------------------

function string_search(longString,shortString)
{
    let count = 0
    for (let index = 0; index < longString.length-1; index++) {
        let temp = index
        if (longString[temp] === shortString[0]) {
            for(let element = 0; element < shortString.length; element++){
                if (shortString[element] === longString[temp])
                { 
                    temp ++
                    if (element === shortString.length-1)
                        count++
                }
                else break    
            };
        };
    }
    return count
    
}

// --------------------------------------------------------------------------------------------------------------


// console.log(linear_search([8,6,3,2,6,8,3],2))
// console.log(linear_search([8,6,3,2,6,8,3],1))

// console.log(binary_search([2,3,5,6,7,8,18],2))
// console.log(binary_search([2,3,5,6,7,8,18],18))

console.log(string_search("wtfsomgndnsomghst","ndn"))
console.log(string_search("ppmpsppppspppppppsmpppppspppppptp","pp"))

