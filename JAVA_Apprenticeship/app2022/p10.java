//                                                           ARRAY

// How to take input from user or an array .
// code segment :-
//  import java.util.*;
// Scanner sc=new Scanner(System.in);
// int[]x = new int[5];
// int i;  --> take input / for store / use array value we use LOOP CONTROLS .


// WAP to find some and average of 10 numbers using Array.

import java.util.*;
class p10 
{
public static void main (String [] args)
{
int [] x=new int [10] ;  // Declaration of array
int i , sum=0;
double avg;
Scanner sc=new Scanner(System.in);
System.out.println("Enter ten numbers");

for (i=0;i<10;i++)
{
x[i] = sc.nextInt();
sum=sum+x[i];
}

 //avg=sum/10;              
 //--> int/int = (Result  Quesent / bragfal ) for solve this proble we use TYPECasting. 

avg =(float) sum/10;
System.out.println("Sum ="+sum);
System.out.println("Avg ="+avg);

}
}







