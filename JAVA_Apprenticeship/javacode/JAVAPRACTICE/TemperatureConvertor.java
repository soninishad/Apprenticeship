/*

1.
Write a java program to make a temperature convertor based on user choice.
If user input 1 convert temperature from centigrade to Fahrenheit and if user input 2 convert temperature from Fahrenheit to centigrade.
Hint:-
For c to f:-
f=(9*c)/5+32;
f = c*(9/5)+32;


For f to c:-
c=(f-32)*5/9;


*/

import java.util.*;

class convertor
{
public static void main(String [] args)
{

float c,f;
Scanner s=new Scanner(System.in);
System.out.print("Enter a value : ");
c=s.nextFloat();
//f=c*9/5+32;

f=(9*c)/5+32;
System.out.println(" Centigrate to Fahrenheit : "+f);


System.out.println("Enter the value of f :");
f=s.nextFloat();
c=(f-32)*5/9;
System.out.println("F to c : "+c);

}
}