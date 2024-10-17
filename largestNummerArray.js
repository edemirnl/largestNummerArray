let arr= [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
function LargestNumber (x){
 let newArray=[]
 let max=0
 for(let i=0 ; i<x.length ; i++ ){
    for(let j=0 ; j<x[i].length; j++){
          if(x[i][j]>max){
            max=x[i][j]
          }
    }
    newArray.push(max)
 }
 return newArray
}
console.log(LargestNumber(arr))