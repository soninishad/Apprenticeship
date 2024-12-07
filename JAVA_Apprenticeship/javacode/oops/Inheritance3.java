//WAP to demonstrate Multi-level Inheritance.

class X
{
void showX()
{
System.out.print("Message from class X ");
}
}

class Y extends X 
{
void showY()
{
System.out.println("Message from class Y ");
}
}

class Z extends y
{
void showZ()
{
System.out.println("Message from class Z ");
}
}

class demo3 
{
public static void main(String[] args)
{
Z z=new Z();
z.showX();
z.showY();
z.showZ();
}
}
