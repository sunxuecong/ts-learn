//js中参数是不考虑类型和个数的
//ts中的参数是考虑类型和个数的

//要求参数是number
function sum (a:number,b:number){
    return a + b
}
sum(1,2)

//要求参数的返回值是number
function sum1(a:number,b:number):number{
    return  a+ b
}
sum1(2,3)
