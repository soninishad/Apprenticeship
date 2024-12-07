// 2.	WAP to check given year is leap year or not 

import java.util.*;

class Leapyear 
{
  public static void main(String[] args)
  {
    int n;
    Scanner sc=new Scanner(System.in);
    System.out.println("Enter a year : ");
    n=sc.nextInt();
    if(n%4==0)
    {
        System.out.println("Leap year");
    }
    else
    {
        System.out.println("Number is not a leap year");
    }
  }
}