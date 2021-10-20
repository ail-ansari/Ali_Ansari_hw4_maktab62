let str1="heehh"
let counter=str1.length-1
let flag=true
for (let index = 0; index < str1.length; index++) {
    if(str1[index] != str1[counter])
    {
        flag=false
    }
    counter--
}
console.log(flag);