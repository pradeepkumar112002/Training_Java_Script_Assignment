//Reverse a string
let strOne = "Welcome to this Javascript Guide!"
let strArr = strOne.split(" ");
let strArrReverse = [];
for(var i = 0;i<strArr.length;i++){
    strArrReverse[i]= strArr[i].split("").reverse().join("");
}

console.log(strArrReverse.join(" "));


//2 empty an array
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];
arrayList=[];
console.log(arrayList);

//3 to implement enque and deque using 2 stack

var stack = [1,2,3]
console.log("Before pushing  "+stack);
stack.push(1);
console.log("After pushing  "+stack);
stack.pop();
stack.pop();
console.log("AFter popping two elements  "+stack);
stack=[1,2,3];
stack.shift();
console.log("After shifting"+stack)
stack.unshift(4);
console.log("After unshifting"+stack);

//4 For loop problem

    for(var i=0;i<100;i++){
        if(i%3==0 && i%5==0){
           console.log("fizzbuzz " + i)
       }
        else if(i%3==0){
            console.log("fizz "+i)
        }
        else if(i%5==0){
            console.log("buzz "+i)
        }
    }

//5 Anagram

function anagram(temp1,temp2){
    let str1= temp1.toLowerCase();
    let str2= temp2.toLowerCase();
    let a = str1.split('').sort().join('');
    console.log(a);
    let b = str2.split('').sort().join('');
    console.log(b);
    if(a == b){
        console.log("True");
    }
    else{
        console.log("False");
    }
}

anagram("Mary","Army")

//6 Valid Name
function validName(name){

    var validator = name.split(" ");
    if(validator.length==3){
    //condition one
    validatorSplitterOne=validator[0].split("");
    
    validatorSplitterTwo = validator[1].split("");
    
    validatorSplitterThree = validator[2].split("");
    
    for(const validators of validator){
        if(validators[0] != validators[0].toUpperCase()){
            console.log("false")
            return false;
        }
    }
    let flag=1;
    if(validatorSplitterOne[0]==validatorSplitterOne[0].toUpperCase() && validatorSplitterOne[1]=="." ){
        if(validatorSplitterTwo[0]==validatorSplitterTwo[0].toUpperCase() && validatorSplitterTwo[1]!="." && validatorSplitterThree[0]==validatorSplitterThree[0].toUpperCase() && validatorSplitterThree[1]!="."){
            console.log("True");
            return true;
        }
        else{
            console.log("False")
            return false;

        }
    }
    else if(validatorSplitterTwo[0]==validatorSplitterTwo[0].toUpperCase() && validatorSplitterTwo[1]=="." ){
        if(validatorSplitterOne[0]==validatorSplitterOne[0].toUpperCase() && validatorSplitterOne[1]!="." && validatorSplitterThree[0]==validatorSplitterThree[0].toUpperCase() && validatorSplitterThree[1]!="."){
            console.log("True");
            return true;
        }
        else{
            console.log("False")
            return false;
        }
    }
    else if(validatorSplitterThree[0]==validatorSplitterThree[0].toUpperCase() && validatorSplitterThree[1]=="." ){
        if(validatorSplitterTwo[0]==validatorSplitterTwo[0].toUpperCase() && validatorSplitterTwo[1]!="." && validatorSplitterOne[0]==validatorSplitterOne[0].toUpperCase() && validatorSplitterOne[1]!="."){
            console.log("True");
            return true;
        }
        else{
            console.log("False")
            return false;
        }

    }
    else{
        console.log("False")
        return false;
    }
}
else if (validator.length==2){
    validatorSplitterOne=validator[0].split("");
    
    validatorSplitterTwo = validator[1].split("");
    for(const validators of validator){
        if(validators[0] != validators[0].toUpperCase()){
            console.log("false")
            return false;
        }
    }
    if(validatorSplitterOne[0]==validatorSplitterOne[0].toUpperCase() && validatorSplitterOne[1]=="." && validatorSplitterTwo[1]!="."){
        console.log("True");
        return true
    }
    if(validatorSplitterTwo[0]==validatorSplitterTwo[0].toUpperCase() && validatorSplitterTwo[1]=="." && validatorSplitterOne[1]!="."){
        console.log("True");
        return true
    }
}
else{
    console.log("false")
    return false;
}
    
}
console.log("Name Validator")
validName("Pradeep Kumar K.")