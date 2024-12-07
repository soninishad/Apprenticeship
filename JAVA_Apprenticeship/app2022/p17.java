// Array 2

//WAP to take 5 name as input and display those names in Alphabetical Order . 

import java.util.*;

class Array
{
public static void main(String[] args)
{
String [] name=new String[5];
int i;
Scanner sc=new Scanner(System.in);
System.out.println("Enter five names");
for(i=0;i<5;i++)
{
name[i]=sc.nextLine();
}
Arrays.sort(name) ;    // Sort is a ---->  method
System.out.println("Names in alphabetical orders");

for(i=0;i<5; i++)
{
System.out.println(name[i]);
}

}
}