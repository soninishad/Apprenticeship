//WAP to take five names as input and display names in Alphabetical order.


import java.util.*;

class  p19
{
public static void main(String [] args)
{
String [] name=new String[5];
int i;
Scanner s=new Scanner(System.in);
System.out.println("Enter Five names");
for(i=0; i<name.length; i++)
{
name[i]=s.nextLine();
}
Arrays.sort(name);
System.out.println("Names in ablphabetical order");
// foreach loop
for(String n:name)
{
System.out.println(n);
}
}
}