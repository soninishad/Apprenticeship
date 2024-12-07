// WAP to take a decimal number as input and convert it into binary ,
// octal and hexa-decimal equivalent .

import java.util.*;

class Convertor
{
public static void main(String [] args ) 
{
int n;
Scanner s = new Scanner(System.in);
System.out.println("Enter a number : ");
n=s.nextInt();

// Int conver to string 
System.out.print("Binary Format = "+Integer.toString(n,2));
System.out.print(" Octal Format = "+Integer.toString(n,8));
System.out.print(" Hexa-Decimal Format = "+Integer.toString(n,16));
}
}
