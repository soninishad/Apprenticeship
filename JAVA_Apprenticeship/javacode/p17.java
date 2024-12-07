// WAP to check given number is prime or not .


import java.util.*;

class p17
{
public static void main(String[] args)
{
int n, i, c=0;
Scanner sc=new Scanner(System.in);
System.out.println("Enter the number : ");
n=sc.nextInt();

for(i=1; n<=n; i++)
{
if(n%i==0)
{
c++;
}
}

if(c==2)
{
System.out.println("Number is prime");
}
else 
{
System.out.println("Number is not prime");
}


}
}