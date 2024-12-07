/*
1.
Accept the salary of an employee from the user. Calculate the gross salary on the
following basis:

BASIC HRA DA

1 – 4000 10% 50%
4001 – 8000 20% 60%
8001 - 12000 25% 70%
12000 and above 30% 80%

*/


import java.util.*;

class employee
{

public static void main(String [] args)
{
 
double hra, da, gs, bs;
Scanner sc=new Scanner(System.in);
System.out.print("Enter  a basic Salary : ");
bs=sc.nextDouble();

if( bs<=4000)
{
hra=bs*10/100;
da=bs*50/100;
}
else if(bs>4000 && bs<=8000)
{
hra=bs*20/100;
da=bs*60/100;
}
else if(bs>8000 && bs<=12000)
{
hra=bs*25/100;
da=bs*70/100;
}

else 
{
hra=bs*30/100;
da=bs*80/100;
}

gs=hra+bs+da;
System.out.println("Gross Salary : "+gs);
}
}