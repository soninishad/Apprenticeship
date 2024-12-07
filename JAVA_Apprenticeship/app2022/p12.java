// WAP to check given number is even or odd.
// If-else statement


import java.util.Scanner;

class CEO
{
public static void main(String []args)
{
int n;
Scanner sc=new Scanner(System.in);
System.out.print("Enter a number : ");
n=sc.nextInt();
if(n%2==0)
{
System.out.println("Number is even");
}
else
{
System.out.println("Number is ODD");
}

}
}