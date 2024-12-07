// WAP a program to make a Simple Calculator .

import java.util.Scanner;

class p3
{
public static void main(String [] args)
{
   int a,b;
   Scanner scanner=new Scanner(System.in);
   System.out.println("Enter two number : ");
   a=scanner.nextInt();
   b=scanner.nextInt();
  System.out.println("Submmation = "+(a+b));
  System.out.println("Subtraction = "+(a-b));
  System.out.println("Multiplication = "+(a*b));
  System.out.println("Division = "+(a/b));
}

}
