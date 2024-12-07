// WAP to input coordinates of a point and check the point is in which Quadrant.
import java.util.*;

class p15
{
public static void main(String[] args)
{
int x,y;
Scanner s =new Scanner(System.in);
System.out.print("Enter value for x : ");
x=s.nextInt();
System.out.println ("Enter value for y : ");
y=s.nextInt();

if(x>0 && y>0)
{
System.out.printf("The point ( %d,%d) is in first quardrant \n",x,y);
}
else if (x<0 && y>0)
{
System.out.printf("The point ( %d,%d) is in Second quardrant \n",x,y);
}
else if (x<0 && y<0)
{
System.out.printf("The point ( %d,%d) is in Third quardrant \n",x,y);
}
else if (x>0 && y<0)
{
System.out.printf("The point ( %d,%d) is in Fourth quardrant \n",x,y);
}
else if (x>0 && y<0)
{
System.out.printf("The point ( %d,%d) is at origin \n",x,y);
}
else  {
System.out.println("The point is located either X-axis or Y-axis");
}
}  }