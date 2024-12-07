// WAP to calculate the SIMPLE INTREST.
// SI =(P*N*R)/100
// double si,n,p,r ;

import java.util.Scanner;

class p5
{
public static void main(String[] args)
{
double n,p,r,si;
System.out.println("Enter a value of N , P, R ");
Scanner scanner=new Scanner (System.in);
n=scanner.nextDouble();
p=scanner.nextDouble();
r=scanner.nextDouble();

si=(p*n*r)/100;
System.out.println(" Simple Intrest :"+si);

}

}