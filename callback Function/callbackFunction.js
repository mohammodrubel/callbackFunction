// callback function 
function myFunction(a,b,callback){
    var c = a + b
    var d = a - b
    var xyz = callback(c,d)
    return xyz

}

function sum (a,b){
    return a + b
}

var result = myFunction(3,2,sum)
console.log(result)


// same function just change your valu + , -, * , / 

function main (a,b,callback){
    var c = a + b
    var d = a - b 
    var need = callback(c,d)
    return need
}

function sum ( a,b){
    return a + b
}

var result = main(5,8,sum)
console.log(result)

var result2 = main (5,8,function(c,d){
    return c-d
})
console.log(result2)

var result3 = main (5,8,function(c,d){
    return c *d
})
console.log(result3)

var result4 = main (5,8,function(c,d){
    return c/d
})
console.log(result4)
