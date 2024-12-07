// 3. Write a java program to take day number as input and display day of week.


import java.util.*;

class day
{
public static void main(String [] args)
{

int week,day,dayno;
Scanner sc=new Scanner(System.in);
System.out.println("Enter a day : ");
dayno = sc.nextInt();
week = (dayno%365)/7;
day = (dayno%365)%7;

System.out.println( "Weeks:"+week + " Days:" +day);

}
}