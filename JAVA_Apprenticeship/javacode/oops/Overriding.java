// WAP to demonstrate concept of Method Overriding.

class Base 
{
void m1()
{
System.out.println("m1 of base");
}
void m2()
{
System.out.print("m2 of base");
}
}

class Derived extends Base 
{
void m1()
{
System.out.println("m1 of derived");
}

void m3()
{
System.out.println("m3 of derived");
}
}

class OverridingDemo
{
public static void main(String [] args)
{
Base b=new Base();
b.m1();
b.m2();

Derived d=new Derived();
d.m1();
d.m2();
d.m3();
}
}





