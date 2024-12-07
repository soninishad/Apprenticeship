// 4. Write a java program to convert given number of days to a measure of time given in years,
//  Weeks, and days.
//  For example, 375 days is equal to 1 year 1 week and 3 days (ignore leap year)

import java.util.*;

class Convert
{
public static void main(String []args)
{

int day,year,week,dayno;
Scanner sc=new Scanner(System.in);
System.out.println("Enter a day :32 ");
dayno = sc.nextInt();
year=dayno/365;
week = (dayno%365)/7;
day = (dayno%365)%7;
System.out.println("years : " +year );
System.out.println("Weeks : " +week );
System.out.println("Days : " +day );

}
}

