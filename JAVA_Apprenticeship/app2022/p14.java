// WAP to find greatest number in Three uneqaul numbers.

import java.util.*;

class GN
{
public static void main (String[] args)
{
int a,b,c;
Scanner s=new Scanner(System.in);
System.out.println("Enter three number ") ;
a=s.nextInt();
b=s.nextInt();
c=s.nextInt();
if(a>b && a>c)
{
System.out.println("Greatest No= "+a);
}
else if(b>a && b>c)
{
System.out.println("Greatest No = "+b);
}
else
{
System.out.println("Greatest No = "+c);
}

}
}
