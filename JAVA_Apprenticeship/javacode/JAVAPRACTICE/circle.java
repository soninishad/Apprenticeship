// Write a java program to find area and perimeter of circle.

import java.util.*;

class circle
{
public static void main(String[]args)
{

double r, a,p;
Scanner sc=new Scanner(System.in);
System.out.print("Enter the value of r : ");
r=sc.nextInt();
a=(3.14)*r*r;
p=2*(3.14)*r;
System.out.println("Area : " +a);
System.out.println("Perimeter : "+p);
}
}