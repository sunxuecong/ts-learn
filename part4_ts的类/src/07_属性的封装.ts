(function (){

    //定义一个表示人的类
    class Person {
        name:string
        age: number
        constructor(name:string,age:number) {
            this.name = name
            this.age = age
        }
    }
    const per  = new Person('孙悟空',18)

    /*
    * 现在属性是在对象中设置的，属性可以被修改，
    *   -属性可以任意的被修改，将会导致对象中的数据变得非常不安全。
    * */

})()
