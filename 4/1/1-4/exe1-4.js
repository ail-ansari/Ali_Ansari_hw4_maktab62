let newarr=[]
let myarr=[10,[25,13],[14,[55]],2]
makearr(myarr)
console.log(newarr);


function makearr(arrayTst)
{
    for (let index = 0; index < arrayTst.length; index++) {
        if(Array.isArray(arrayTst[index]))
        {
        makearr(arrayTst[index])
    }
    else
    {
            newarr.push(arrayTst[index])
    }
    
}
}