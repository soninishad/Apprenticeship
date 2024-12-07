 import java.util.*;
 
 class Calculator2 {
public static void main(String [] args)    
{
    int a,b;
    Scanner sc=new Scanner(System.in);
    System.out.println("Enter a two number  : ");
    a=sc.nextInt();
    b=sc.nextInt();
    System.out.println("Sum = "+(a+b));
    System.out.println("Subtraction = "+(a-b));
    System.out.println("Multiplication = "+(a*b));
    System.out.println("Division = "+(a/b));
}
}
