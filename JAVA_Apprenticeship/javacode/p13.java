// WAP a program to find factorial of given number .

import java.util.*;


class fact
{
public static void main(String[] args)
{
int n , f=1;
Scanner scanner=new Scanner(System.in);
System.out.println("Enter a number : ");
n=scanner.nextInt();
while(n>0)
{
f=f*n;
n--;
}
System.out.println("Factorial : "+f);

}
}