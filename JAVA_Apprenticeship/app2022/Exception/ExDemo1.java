
// WAP to find division of two numbers 

import java.util.*;

class ExDemo1
{
public static void main(String [] args)
{
int a,b,c;
Scanner s=new Scanner(System.in);
try
{
System.out.print(" Enter first number : ");
a=s.nextInt();
System.out.println("Enter the second no. : ");
b=s.nextInt();
c=a/b;
System.out.println("Result : "+c);
}

catch(InputMismatchException e1)
{
System.out.println ("Enter number only " );
}

catch(ArithmeticException e2)
{
System.out.println (" Are you trying to / by zero ? " );
}
finally
{
System.out.println("This is finally block");
}
 
}
}
