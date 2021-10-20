let o=["st","nd","rd","th"]
let color=["green","blue","red","purple","black","gray","orange","violet","white","pink",
"yellow","indigo","gray","orange","violet","white","pink","yellow","indigo" , 
"gray","orange","violet","white","pink","yellow","indigo"
]
for (let index = 0; index < color.length; index++) {
    if(index<4 && index < 20)
    {
        console.log(`${index+1 + o[index]} choice is ${color[index]}`);
    }
    else if(index <20)
    {
        console.log(`${index+1 + o[3]} choice is ${color[index]}`);
    }
    else if(index >= 20)
    {
        let temp
        temp=index%10
        if(temp <4 && index <100)
        {
            console.log(`${index+1 + o[temp]} choice is ${color[index]}`);
        }
        else
        {
            console.log(`${index+1 + o[3]} choice is ${color[index]}`);
        }
        
    }
}