/*
* 构造函数constructor
* */

class Dog {
    name:string
    age:number
    //constructor被称为构造函数
    //构造函数会在对象创建时调用（）使用new关键字调用。
    constructor(name:string,age:number) {
        //在实例方法中，this就表示当前的实例。
        //在构造函数中当前对象就是当前新建的那个对象
        //可以通过this向新建的对象中添加属性。
        this.name =name
        this.age = age
    }
    bark(){
        alert('旺旺旺')
    }
}
const dog = new Dog('大黄',18)
console.log(dog)
