// QUESTIO 01--------------------------
var arr =[1,2,3,4,5,6,7,8,9,10]
function middleEle(arr){
    for (let i = 0; i < arr.length; i++) {
        const x = arr[i];
        var mid = 0;
        mid = (Math.floor(arr[0] + arr.length/2));
        return mid;  
    }
}
 console.log (middleEle(arr));

//---------------------------------------
//QUESTION 02----------------------------

var arr =[0,3,6,7,10]
function sumEven(arr){
const x = arr.length;
    for (let i = 0; i< x ; i++ ) {      
        
        var sum= 0 ;
        if (arr[i]%2==0) {
            sum+=arr[i];
           return sum;  
        }}}
        console.log(sumEven(arr));

//---------------------------------------
//QUESTION 03----------------------------

var arr =[2,6,8,10,12,14]
function findIndex(arr,tragetnum){
    let indexOcc = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]== tragetnum) {
            return i;       
        }
        else{
            return -1;
        } }}
console.log(findIndex(arr,8));

//---------------------------------------
//QUESTION 04----------------------------

var arrOne =[1,2,3,4,5]
var arrTwo =[4,5,6,7,8]
function maxSum(arrOne,arrTwo){
    let sumOne = 0;
    let sumTwo = 0;
    for (let i = 0; i < arrOne.length; i++) {
        sumOne+=arrOne[i];
            
        }
        for (let j = 0; j < arrTwo.length; j++) {
            sumTwo+=arrTwo[j];    
            }
    if(sumOne > sumTwo){
        return sumOne;
    }
    else{
        return sumTwo;
    }      
}

console.log(maxSum(arrOne,arrTwo));

//---------------------------------------
//QUESTION 05----------------------------


var arrOne =[1,2,3,4,5]
var arrTwo =[40,50,60,70,80]
var arrThree =[9,10,11,12,13]
function maxSum(arrOne,arrTwo,arrThree){
    let sumOne = 0;
    let sumTwo = 0;
    let sumThree = 0;
    for (let i = 0; i < arrOne.length; i++) {
        sumOne+=arrOne[i];
            
        }

        for (let j = 0; j < arrTwo.length; j++) {
            sumTwo+=arrTwo[j];
                
            }

            for (let k = 0; k < arrTwo.length; k++) {
                sumTwo+=arrThree[k];
                   
                }
    if(sumOne > sumTwo && sumOne > sumThree){
        return sumOne;
    }
    else if (sumTwo > sumOne && sumTwo > sumThree){
        return sumTwo;
    }
    else {
        return sumThree;
    }
          
}
console.log(maxSum(arrOne,arrTwo,arrThree));


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




