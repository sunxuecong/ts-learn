(function (){

    //定义一个表示人的类
    class Person {
        // TS 可以在属性的前面添加属性的修饰符。
        /*
        *pulic表示可以在任意访问（修改）。
        * private 私有属性，私有属性只能在内部访问（修改）。
        *   -通过类中添加方法使得 我们的私有属性可以被外部访问。
        *protected  受包含的属性，只在当前类和类的子类中使用
        * */
        private _name:string
        private _age: number
        constructor(name:string,age:number) {
            this._name = name
            this._age = age
        }
        /*
        *   getter方法用来读取属性
        *   setter方法用来设置属性
        *       -它们被称为属性的存取器
        * */


        //定义一个方法可以获取name 属性。
        getName(){
            return this._name
        }
        //定义方法用来 设置（修改）属性。
        setName(name:string){
            this._name = name
        }
        setAge(age:number){
            if(age >= 0){
                this._age = age
            }
        }
/*++++++++++++++++++++++++++++++++++++++++++以上代码为js写法++++++++++++++++++++++++++++++++++++++++++++++*/
        //在TS中设置 getter方法的方式  可以直接per.name 调用。
        get name(){
            return this._name
        }
        set name( value){
                this._name = value
        }


    }
    const per  = new Person('孙悟空',18)

    /*
    * 现在属性是在对象中设置的，属性可以被修改，
    *   -属性可以任意的被修改，将会导致对象中的数据变得非常不安全。
    * */

})()
