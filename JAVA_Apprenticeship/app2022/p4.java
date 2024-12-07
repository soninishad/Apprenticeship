// WAP to find the volume and surface area of the cuboid.
// v = l*b*h;
// sa = 2*(l*b+b*h+h*l);

import java.util.Scanner;

class p4
{
 
public static void main(String [] args)
{
int l, b,h,v, sa;
System.out.println("Enter the value of l ,b and h");
Scanner sc=new Scanner(System.in);
l=sc.nextInt();
b=sc.nextInt();
h=sc.nextInt();
v=l*b*h;
sa = 2*(l*b+b*h+h*l);
System.out.println(" Area :"+v);
System.out.println("Cuboid :"+sa);

}
}

