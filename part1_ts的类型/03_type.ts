//使用字面量进行类型声明
let a: 10 //限制值为number且为number
a = 10


//可以使用 | 连接多个类型
//b的值只能为string类型的'man'或者'woman'其他不行。
let b :'man' |'woman'
b = "man"

//c的值可以为number 和string
let c :number | string
c= 2

//any表示可以任意类型，相当于对ts关闭了类型的校验 d类型的变量可以给任意类型的值赋值
let d:any
d = '3'

//unkown表示未知类型的值,
// unkouwn不能直接赋值给其他的变量。
let e:unknown
e ='name'
if(typeof e === 'string'){
    c = e
}
//类型断言 as可以告诉解析器变量的实际类型
/*
 *语法
 *  变量 as 类型
 *  <类型>变量
 * */
let s:string
s = e as string
s = <string> e

//void 用来表示空，以函数为例，表示没有返回值
function fn() :void{

}
fn()


//never 用来表示空，表示永远没有返回结构
function fn1() :never{
    throw new Error('你报错了')
}
