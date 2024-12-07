// WAP to find greatest number in two unequal numbers .


import java.util.*;

class p7
{
public static void main(String [] args)
{
int a,b;
Scanner s=new Scanner(System.in);
System.out.print("Enter two Numbers : ");
a=s.nextInt();
b=s.nextInt();
int g =(a>b)?a:b;
System.out.println("Greatest number : "+g);
}
}