// WAP to find greatest number in two unequal numbers.


import java.util.Scanner;

class  FGN
{
public static void main(String[] args)
{
int a ,b;
System.out.print("Enter a two number : ");
Scanner scanner=new Scanner(System.in);
a=scanner.nextInt();
b=scanner.nextInt();


if(a>b)
{
System.out.println( "Greatest number is = "+a);
}
else
{
System.out.println( "Greatest number is = "+b);
}

}
}