//WAP to convert a decimal number to its binary, octal, hexa-decimal.


import java.util.*;

class p26
{
public static void main(String[] args)
{
int n;
Scanner s=new Scanner(System.in);
System.out.print("Enter a number : ");
n=s.nextInt();
System.out.println("Binary format="+Integer.toString(n,2));
System.out.println("Octal format="+Integer.toString(n,8));
System.out.println("Hexa-decimal format="+Integer.toString(n,16));

}
}