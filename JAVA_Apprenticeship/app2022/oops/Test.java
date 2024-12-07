// In this program file we import mypack.MyUtil and test MyUtil class .
// and Test MyUtil class 

import java.util.Scanner;
import mypack.MyUtil;

class Test 
{
public static void main (String [] args)
{
  int a,b,s,g;
 Scanner sc=new Scanner(System.in);
 MyUtil mu=new MyUtil();
System.out.println("Enter two number : ");
a=sc.nextInt();
b=sc.nextInt();
s=mu.add(a,b);
g=mu.greatest(a,b);
System.out.println("Sum = "+s);
System.out.println("Greatests No. = "+g);
}
}



