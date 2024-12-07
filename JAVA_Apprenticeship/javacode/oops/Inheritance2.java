// Example of Heirarchical Inheritance 

import java.util.*;
class Shape {
int s;
void setValue( int side)
{
s=side;
}
}

class Square extends Shape
{
int area()
{
return s*s;
} 
}

class Cube extends Shape
{
int volume()
{
return s*s*s;
}
}

class demo2
{
public static void main(String [] args)
{
int x,a,v;
Scanner sc=new Scanner(System.in);

Square sq=new Square();
System.out.print("Enter side of square : ");
x=sc.nextInt();
sq.setValue(x);
a=sq.area();
System.out.println("Area of Square : "+a);

Cube cu=new Cube();
System.out.print("Enter the side of Cube : ");
x=sc.nextInt();
cu.setValue(x);
v=cu.volume();
System.out.println("Volume of Cube : "+v);
}
}