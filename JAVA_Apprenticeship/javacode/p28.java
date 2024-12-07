// WAP to find the volume of cuboid. 

import java.util.*;

class p28
{
int volume(int l,int b,int h)
{
return(l*b*h);
}
public static void main(String[] args)
{
int x,y,z,v;
Scanner s=new Scanner(System.in);
System.out.print("Enter length of cuboid : ");
x=s.nextInt();
System.out.print("Enter breadth of cuboid : ");
y=s.nextInt();
System.out.print("Enter heigth of cuboid : ");
z=s.nextInt();

// class ka object  create 
// first p28 --> variable bnane ke liye
//  p -->store
// new p28()  --> object create
// new p28().volume     ---> annonimouse
p28 p=new p28();   // --> object with reference variable
v=p.volume(x,y,z);
System.out.println("Volume of cuboid = "+v);
}
}