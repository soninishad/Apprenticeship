// WAP to demonstrate concept of multi-level inheritance

class A
{
void showA()
{
System.out.println("This message from Class A");
}
}

class B extends A
{
void showB()
{
System.out.println("This message from class B");
}
}

class C extends B
{
void showC()
{
System.out.println("This message from class C");
}
}

class multiinheritence
{
public static void main(String [] args)
{
C c = new C();
c.showA();
c.showB();
c.showC();
}
}





