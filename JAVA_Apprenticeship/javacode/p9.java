// WAP to find greatest Number in three nuequal numbers .

import java.util.*;

class p9
{
    public static void main(String[] args)
    {
        int a,b,c;
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a three number : ");
        a=sc.nextInt();
        b=sc.nextInt();
        c=sc.nextInt();
        int g=(a>b)?((a>c)?a:c):((b>c)?b:c);
      System.out.println("Greatest number : "+g);  
    }
}