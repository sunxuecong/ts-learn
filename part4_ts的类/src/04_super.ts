(function (){

    //定义一个父类
    class Animal {
        name:string
        age:number
        constructor(name:string,age:number) {
            this.name = name
            this.age = age
        }
        sayHello(){
            console.log('动物在叫 ')
        }
        }

    class  DOg extends  Animal {
        constructor(name:string,age:number) {
            //如果在在子类中写了构造函数，在子类的构造函数中，必须调用父类的构造函数。
            super(name,age);
        }
        sayHello() {
            //在类的方法中 super表示当前类的父类
            super.sayHello();
        }
    }
    const dog = new DOg('小猫',16)
})()
