// Input a String to convert Upper Case and Lower Case and also find length .

import java.util.*;
class p20
{
public static void main(String [] args)
{
String name;
Scanner s=new Scanner(System.in);
System.out.println("Enter the name :");
name=s.nextLine();
System.out.println("Nmae in upper case ="+name.toUpperCase());
System.out.println("Name in lower case="+name.toLowerCase());
System.out.println("Length of your name="+name.length());
}
}
 