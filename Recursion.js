
// ------------------------------------------------ Functions ----------------------------------------------------------------

// -------Factorial--------

function factorial(number)
{
    if(number === 1) return 1
    return number* factorial(number-1)
}

// ------------------------


// ---------sumRange-------

function sumRange(number)
{
    if (number === 1) return 1
    return number + sumRange(--number)
}
// ------------------------






// ----------------------------------------------------------------------------------------------------------------
// console.log(factorial(5))
console.log(sumRange(5))