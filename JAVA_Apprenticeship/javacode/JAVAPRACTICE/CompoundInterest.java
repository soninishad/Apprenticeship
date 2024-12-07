// 2. Write a java program to calculate compound interest.
//   ci = p(1+r/100)*n-p;
//   si = p*n*r/100;

import java.util.*;

 class compound
{
public static void main(String []args)
{
int p,n,r;
double ci;
Scanner sc=new Scanner(System.in);
System.out.print("Enter the value of p,n,r : ");
p=sc.nextInt();
r=sc.nextInt();
n=sc.nextInt();
ci=p*(1+r/100)*n-p;
System.out.println("Compound Interest :"+ci);

}
}