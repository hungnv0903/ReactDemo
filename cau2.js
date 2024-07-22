const arr  = [[60,40,65,55] , [86,81,3,99,83] , [70,80,2,66,98] , [1,9,11,2,3],[1,2,3,4,9]] ; 
let max = -10000 ; 
const sumArr = (arr)=>{
    const result = arr.reduce((total , item)=>total+item,0) ; 
    return result ; 
}

const find_1 = (arr)=>{
    for(let i = 0 ; i< arr.length ; i++){
        if(arr[i]===1){
            return true ; 
            break ; 
        }
    }
}
const find_9 = (arr)=>{
    for(let i = 0 ; i< arr.length ; i++){
        if(arr[i]===9){
            return true ; 
            break ; 
        }
    }
}

var newArr = [] ; 
arr.forEach((item)=>{
    if(max<sumArr(item)){
        max = sumArr(item) ; 
    }
    if(find_1(item) && find_9(item)){
        newArr.push(item) ; 
    }
    
})

console.log(max)
console.log(newArr)

//