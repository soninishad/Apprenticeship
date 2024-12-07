//  WAP to print fibonacci series up to n terms .
//  
//  

import java.util.*;

class p16
{
public static void main(String [] args)
{
 int n1=0, n2=1, n3, n, i;
Scanner scanner=new Scanner(System.in);
System.out.println("How many terms you want in series? ");
n=scanner.nextInt();
System.out.print(n1+" " +n2+ " " );
for(i=1; i<=n-2; i++)
{
n3=n1+n2;
System.out.print(n3+" ");
n1=n2;
n2=n3;
}

}
}
