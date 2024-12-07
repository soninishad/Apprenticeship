// WAP to understand concept of  interface in java.

interface MyInterface
{
void m1();     // public abstract void m1();
void m2();    //  public abstract void m2();
void m3();   //   public abstract void m3();
}

class TestInterface implements MyInterface
{
public void m1()
{
System.out.println("This message from m1() method ");
}

public void m2()
{
System.out.println("This message from m2() method");
}

public void m3()
{
System.out.println("This is from m3() method ");
}

public static void main(String [] args)
{
TestInterface t=new TestInterface();
t.m1();
t.m2();
t.m3(); 
}
}


