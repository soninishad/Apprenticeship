// Word Counter

import java.util.*;

class split
{
public static void main(String[] args)
{
String sen;
Scanner scanner=new Scanner(System.in);
System.out.print("Enter a Sentence : ");
sen=scanner.nextLine();
String [] words=sen.split(" ");
int l=words.length;
System.out.println("No of words : "+l);
}
}
