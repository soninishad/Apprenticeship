import java.util.*;

class Even
{
    public static void main(String [] args)
    {
int n;
Scanner sc=new Scanner(System.in);
System.out.print("Enter a number :");
n=sc.nextInt();

if(n%2==0)
{
    System.out.print("Number is Even ");
}
else 
{
    System.out.print("Number is Odd");
}
}
}