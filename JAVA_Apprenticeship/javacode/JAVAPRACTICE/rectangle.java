
// Rectangle of Area and Parameter...

import java.util.*;

class rectangle
{
public static void main(String []args)
{
int a,b,l,p;
Scanner s=new Scanner(System.in);
System.out.println("Enter the value of L and b : ");
l=s.nextInt();
b=s.nextInt();
a=l*b;
p=2*(l+b);
System.out.println("Area : "+a);
System.out.println("Parameter : "+p); 
}
}