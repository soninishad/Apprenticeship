// WAP to check given year is leap year or not .

import java.util.*;

class task2_3
{
public static void main(String[] args)
{
int year;
Scanner s=new Scanner(System.in);
System.out.print("Enter Year : ");
year=s.nextInt();
if(year%4==0)
{
System.out.println("Year is leap year ");
}
else
{
System.out.println("Year is not  leap year");
}

}
}