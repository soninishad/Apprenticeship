// Write a java program  to calculate Compound Interest .
// CI = P(1+R/100)*n-P;

import java.util.*;

class p7
{
public static void main(String[] args)
{
int p,r,n;
double CI;
Scanner s=new Scanner(Sysetm.in);
System.out.println("Enter the number of p,r,n.t : ");
p=s.nextInt();
r=s.nextInt();
n=s.nextInt();

 CI = p(1+r/100)*n-p;
System.out.print("Compound Interest :"+CI);

}
}



