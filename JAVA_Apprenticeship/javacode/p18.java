// WAP to take 10 numbers as input. Store these numbers in array and find sum and average.


import java.util.*;

class p18
{
public static void main(String [] args)
{
int [] list=new int[10];
int i, sum=0;
double avg;
Scanner sc=new Scanner(System.in);
System.out.println("Enter the ten numbers to the list");
for(i=0; i<10; i++)
{
   list[i]=sc.nextInt();
   sum=sum+list[i];
}
// typecasting
avg=(float)sum/10;
System.out.println("Sum = "+sum);
System.out.println("Average = "+avg);
}
}