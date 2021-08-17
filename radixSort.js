// ---------------------------------------Helper Function------------------------------------------------
function getDigit(num,digit)
{
    let base = Math.abs(10 ^ digit)
    console.log(Math.floor(num%base))
}

getDigit(234,2)