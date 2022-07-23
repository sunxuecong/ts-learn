//object表示一个对象（一般不使用）
let a:object
a = {}

//用{}可以指定对象包含哪些属性
//语法：{属性名：属性值，属性名：属性值}
//属性名后边加问好表示可选属性
let b:{name:string,age?:number}
b = {name:'张三'}

//[propName:string]:any 表示任意类型的属性
let c :{name:string,[propName:string]:any}

//设置函数结构的类型声明
//语法：（形参：类型，形参：类型） => 444
let d:(a:number,b:number)=> number
d = function (n1,n2){
    return n1 + n2
}

//string[]表示数组
let e :string[]
e = ['2','3']
//表示数字类型的数组
let g:Array<number>
g = [1,23]
//表示任意类型的数组
let h:Array<any>

/**
 * 元祖就是固定长度的数组
 * */
let i :[string,number]
i = ['name',1]

/*
* enum枚举
*\
* */

let j:{name:string,gender: 0 | 1}
j = {name:'张三',gender:1}

enum Gender{
    Male,
    Female
}
let k:{name:string,gender: Gender}
k = {name:'张三',gender:Gender.Male}

//类型的别名
type myType = 1 |2 |3 |4 |5
let l :myType
