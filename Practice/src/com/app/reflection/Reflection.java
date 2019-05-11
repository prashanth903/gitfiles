package com.app.reflection;

public class Reflection {}

class Simple{}  

class Test{  
  void printName(Object obj){  
  Class c=obj.getClass();    
  System.out.println(c.getName());  
  }
	public static void main(String[] args) {

		Reflection f=new Reflection();
		Test t=new Test();  
		   t.printName(f);  
	}

}
  
 

