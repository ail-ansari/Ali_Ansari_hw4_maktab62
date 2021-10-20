var counter=0
var last=0

let myarr=[10,[25,13],[14,[55]],2]
for (let index = 0; index < myarr.length; index++) {
    if(Array.isArray(myarr[index]))
    {
        counter++
        IsArray(myarr[index])
    }
    if(counter>last)
    {
        last=counter
    }
   counter=0
    
}
console.log(last+1);


function IsArray(arrayTst)
{
    for (let index = 0; index < arrayTst.length; index++) {
        if(Array.isArray(arrayTst[index]))
    {
        counter++
        IsArray(arrayTst[index])
    }
    
}
}