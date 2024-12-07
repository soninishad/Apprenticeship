// Electricity Bill Calculate........


import java.util.*;

class task2_2
{
public static void main(String [] args )
{
int unit;
double bill;
Scanner s=new Scanner(System.in);
System.out.print("Enter number of units cousumed : ");
unit=s.nextInt();

if(unit<=150)
{
bill=unit*2.40;
}
else if (unit>150 && unit<=300)
{
bill=(150*2.40)+(unit-150)*3.00;
}
else 
{
bill=(150*2.40)+(150*3.00)+(unit-300)*3.20;
}
System.out.println( "Bill = "+bill);


}
}