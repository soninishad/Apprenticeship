// WAP to find sum of two numbers using user defined method .

import java.util.*;

class p27
{
static int add(int x, int y)
{
return(x+y);
}

public static void main(String[] args)
{
int a,b,c;
Scanner s=new Scanner(System.in);
System.out.println("Enter two number");
a=s.nextInt();
b=s.nextInt();
c=add(a,b);
System.out.println("Sum= "+c);
}
}