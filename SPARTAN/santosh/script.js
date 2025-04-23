//clouser 


function outer (){
    var outervar='outer variable '

    function inner(){
        console.log(outervar)
    }
    return inner

}

const closure=outer()
closure()

// function factory


// const add =(a)=>{
//     return (b)=>{
//         return a+b
//     }
// }

// const add5= add(5)
// const result =add5(10)
// console.log(indexesult)



