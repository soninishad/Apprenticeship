// WAP to find greatest number in three unequal numbers .

import java.util.*;


class p8
{
    public static void main(String[]args)
    {
        int a,b,c;
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter three number : ");
        a=sc.nextInt();
        b=sc.nextInt();
        c=sc.nextInt();
        if(a>b && a>c)
        {
            System.out.println("Greatest Number :"+a);
        }
        else if(b>a && b>c)
        {
            System.out.println("Greatest No=+b");
        }
        else 
        {
            System.out.println("Greatest No="+c);
        }
    }
}