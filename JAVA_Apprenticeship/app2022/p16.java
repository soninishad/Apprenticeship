// WAP to make a simple calculator using SWITCH.


import java.util.*;
 
class Calc
{
public static void main(String[] args)
{
int a,b,res,ch;
Scanner s=new Scanner(System.in);
System.out.println(" Enter two numbers ");
a=s.nextInt();
b=s.nextInt();
System.out.println("1 ->Addition ");
System.out.println("2 ->Subtraction ");
System.out.println("3 ->Multiplication");
System.out.println("4 ->Division ");
ch=s.nextInt();

switch(ch)
{
case 1 : 
res=a+b;
System.out.println("Result = "+res);
break;
case 2: 
res=a-b;
System.out.println("Result = "+res);
break;
case 3: 
res=a*b;
System.out.println("Result = "+res);
break;
case 4 : 
res=a/b;
System.out.println("Result = "+res);
break;
default:
System.out.println("Invalid choice");
break;
}

}
}