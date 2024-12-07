/* 
   WAP to find area and perimeter of rectangle .
    Aera = l*b;
    P = 2(l+b);
*/


import java.util.Scanner;
class p3
{
public static void main(String[] args)
{
int l,b,a,p;
Scanner s=new Scanner(System.in);
l = s.nextInt();
b = s.nextInt();
System.out.println("Enter the value of L and  b");
a=l*b;
p=2*(l+b);

System.out.println("Area =" +a);
}
}


