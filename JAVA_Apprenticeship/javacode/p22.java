// WAP to compare two Strings for equality .

import java.util.*;

class p22
{
public static void main(String[]args)
{
String str1,str2;
Scanner s=new Scanner(System.in);
System.out.print("Enter first string : ");
str1=s.nextLine();
System.out.print("Enter Second string : ");
str2=s.nextLine();
if(str1.equalsIgnoreCase(str2)==true)
{
System.out.println("Both Strings are equal");
}
else
{
System.out.println("Both Strings are not equal");
}

}
}