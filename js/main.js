let a = +prompt('istalgan sonni kirirting :: ')

let Recursive = ()=>{
    if(a==1){
        return 1
    }
    else{
        return a+= (a-1)
    }
}

let summ = Recursive(a)

console.log(summ);