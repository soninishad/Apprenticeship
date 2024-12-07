// FindWhat and replace

import java.util.*;

class p24
{
public static void main(String [] args)
{
String  sen,fw,rw;
Scanner sc=new Scanner(System.in);
System.out.println("Enter a Sentence : ");
sen=sc.nextLine();
System.out.print("Find What ? ");
fw=sc.nextLine();
System.out.print("Replace with : ");
rw=sc.nextLine();
System.out.println("Modified Sentence = " +sen.replace(fw,rw));

}
}
