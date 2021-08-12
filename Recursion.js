
// ------------------------------------------------ Functions ----------------------------------------------------------------





// -------Factorial--------

function factorial(number)
{
    if(number === 1) return 1
    return number* factorial(number-1)
}




// ---------sumRange-------

function sumRange(number)
{
    if (number === 1) return 1
    return number + sumRange(--number)
}




// -------------------------------------------Helper Method recursion------------------------------------------


// ----------------collectOddvalues---------------

function helper_method_collectOddvalues(arr)
{
    let newrr = []
    function helper(input_array)
    {
        if(input_array.length === 0)
            return;

        if(!(input_array[0] % 2 === 0))
            newrr.push(input_array[0])
        
        helper(input_array.slice(1))
    }
    helper(arr)
    return newrr
}

// ------------------------------------------------

// -------------------------------------------Pure recursion------------------------------------------


// ----------------collectOddvalues---------------

function collectOddvalues(arr)
{
    let newarr = []
    if( arr.length === 0)
     return newarr
     
    if(arr[0] % 2 !== 0)
        newarr.push(arr[0])

    newarr = newarr.concat(collectOddvalues(arr.slice(1)))
    return newarr
}

// ------------------------------------------------



// ----------------------------------------------------------------------------------------------------------------
// console.log(factorial(5))
// console.log(sumRange(5))
console.log(collectOddvalues([1,2,3,4,5,6,7,8,9]))