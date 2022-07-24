(function (){


    /*
    *以abstract开头的是抽象类
    *   -抽象类合其他类区别不大 只是不能创建对象。
    * 抽象类中可以添加抽象方法。
    * */
    abstract class Animal {
        name:string
        age:number
        constructor(name:string,age:number) {
            this.name = name
            this.age = age
        }
        //定义一个抽象方法
        //抽象方法使用abstract开头，且没有方法体。
        //抽象方法必须定义在抽象类中，且子类必须对方法进行重写。
        abstract sayHello():void
    }

    class  DOg extends  Animal {
        sayHello() {

        }
    }
    const dog = new DOg('小猫',16)
})()
