// This program demonstrative concept of menthod overriding

class X
{
void m1()
{
System.out.println("m1 of X") ;
}
void m2()
{
System.out.println("m2 of X") ;
}
}

class Y extends X
{
// Here overriding m1() method of class X
void m1()
{
System.out.println(" m1 of Y");                              // -----------------> Over-write.....
}
void m3()
{
System.out.println("m3 of Y");
}
}

class OverRidingDemo
{
public static void main(String[] args)
{
X x1=new X();
x1.m1();              // m1 of X
x1.m2();             // m2 of X

Y y1=new Y();
y1.m1();           // m1 of Y
y1.m2();          // m2 of X
y1.m3();         // m3 of Y
}
}

