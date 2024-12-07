// 	WAP to a find area and perimeter of rectangle .
// a=l*b;
// p=2(l+b)

import java.util.*;

class Rectangle
{
  public static void main(String[] args)
  {
   int a, b,l,p;
    Scanner sc=new Scanner(System.in);
    System.out.println("Enter a two number");
    l=sc.nextInt();
    b=sc.nextInt();
    a=l*b;
    p=2*(l+b);
    System.out.println("Area = "+a);
    System.out.println("Perimeter="+p);
    
  }

}