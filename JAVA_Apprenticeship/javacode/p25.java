// WAP to check given string is palindrome or not .
// palindrome --> reverse string is same 

import java.util.*;

class reverse
{
public static void main(String[] args)
{
String str, revstr="";
Scanner sc=new Scanner(System.in);
System.out.print("Enter a String : ");
str=sc.nextLine();

for(int i=str.length()-1; i>=0; i--)
{
revstr=revstr+str.charAt(i);
}
if(str.equalsIgnoreCase(revstr)==true)
{
System.out.println("String is palindrome");
}
else
{
System.out.println("String is not Palindrome");
}

}
}