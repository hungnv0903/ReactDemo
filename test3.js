const n = 10 ;  
const generateArr = (n)=>{
    let value = [] ; 
    for(let i = 1 ; i<=100000 ; i++){
        value.push(i) ; 
    }

    for(let i = value.length-1 ; i>0 ; i--){
        const j = Math.floor(Math.random()*(i+1)) ; 
        [value[i],value[j]] = [value[j] , value[i]]
    }

    return value.slice(0,n) ; 
}

const matrix = (n)=>{
    let matrix = [] ; 
    for(let i = 0 ; i<n ; i++){
        matrix[i] = generateArr(n) ; 
    }

    return matrix ; 
}

console.log((matrix(n))) ; 

//