/*

2. Write a java program to make an electricity bill calculator.
Unit Bill
1-150 2.40/unit
For next 151-300 3.00/unit
For next more than 300 3.20/unit

*/


import java.util.*;

class Electricity
{
public static void main(String [] args)
{
Double unit, bill , EB ;
Scanner sc=new Scanner(System.in);
System.out.print("Enter a Bill unit : ");
unit=sc.nextDouble();

if( unit<=150 )
{
bill=unit*2.40;
}
else if(unit>150 && unit<=300)
{
bill=(150*2.40)+(unit-150)*3.00;
}
else
{
bill=(150*2.40)+(150*3.00)+(unit-300)*3.20;
}

System.out.println("Total Electricity Bill : "+bill);
}
}

