/*function fn(a:any):any{
    return a
}*/
/*
* 在定义函数时，如果遇到类型不明确的就可以用泛型
* */
function fn<T>(a:T) :T {
    return  a
}
//可以直接调用具有泛型的函数
fn(10) //不指定泛型，ts可以自动对类型进行推断，但并不是所有的情况都可以成功。
fn<string>('hello')  //指定泛型

function fn2<T,K>(a:T,b:K):T{
    console.log(b)
    return  a
}
fn2<number,string>(2,'张三')

interface inter {
    length:number

}

/*
* 表示泛型T必须是一个inter的实现类(子类)
* */
function fn3<T extends  inter> (a:T){
    return a.length
}

/*
* class类使用泛型
* */
class MyClass <T>{
    name:T
    constructor(name:T) {
        this.name = name
    }
}
const mc = new MyClass<string>('222')
