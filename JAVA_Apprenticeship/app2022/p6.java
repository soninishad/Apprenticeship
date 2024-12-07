//  Write a java program to find area perimeter of Circle.
// Area =3.14*r*r;


import java.util.Scanner;

class Assign1
{
public static void main(String[] args)
{
double r, a;
System.out.print(" Enter a number :");
Scanner scanner=new Scanner (System.in);
r =scanner.nextDouble();
a=3.14*r*r;
System.out.println("Area : "+a);

}
}