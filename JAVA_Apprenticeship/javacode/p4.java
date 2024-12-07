/*
Write a program to find volume and surface area of a cuboid .
volume=l*b*h;
Surface area = 2*(l*b+b*h+h*l);
*/

import java.util.Scanner;

class p4
{
public static void main(String [] args )
{
int l , b , h , v ,sa;
Scanner sc=new Scanner(System.in);
System.out.print("Enter Length : ");
l=sc.nextInt();
System.out.print("Enter Breath : "); 
b=sc.nextInt();
System.out.print("Enter Height : ");
h=sc.nextInt();
v=l*b*h;
sa=2*(l*b+b*h+h*l);
System.out.println("Volume : "+v);
System.out.println("Surface Aera : "+sa);
}
}

