 //使用class关键字的方式创建一个类
 /*
 *类中主要包含了2个部分  一个是属性 一个是方法。
 * */

 class Person {
   //定义属性  实例属性共享给所有的实例 。
   name:string = '孙悟空'

   //在属性前添加关健字 static可以定义类属性（静态属性）
   static  age:number = 20

   //readonly开头的属性表示一个只读的属性，无法修改
   readonly sex :string = 'man'

   //定义实例方法
   sayHello(){
    console.log('hellow')
   }

   //定义类方法
  static sayHi (){
   console.log('hi');
  }
 }
 const per = new Person()
 console.log(per);
