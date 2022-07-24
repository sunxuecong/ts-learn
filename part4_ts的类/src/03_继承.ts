(
    function (){
        //定义一个父类
        class Animal {
            name:string
            age:number
            constructor(name:string,age:number) {
                this.name = name
                this.age = age
            }
            sayHello(){
                console.log('wagnwang ')
            }
        }

        //定义一个表示狗的子类
        class Dog extends Animal{

        }

        /*
        *Dog extend Animal
        * -使用集成后，子类将会拥有父类的所有的属性合方法。
        *    -通过继承后，子类将会拥有父类所有的方法合属性。
        *    -继承后可以将多个类中共有的代码写在一个父类中。
        * -如果在子类中添加了合父类相同的方法，则子类的方法会覆盖掉父类的方法。
        *
        *
        *
        * */
        const dog = new Dog('狗',18)
        console.log(dog)
    }
)()
