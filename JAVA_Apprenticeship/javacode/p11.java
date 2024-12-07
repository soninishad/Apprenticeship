// WAP to make a simple calculator using switch 



import java.util.*;

class p11
{
    public static void main(String[] args)
    {
        int x,y,ch;
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter two numbers : ");
        x=sc.nextInt();
        y=sc.nextInt();
      System.out.println("1->Addition");
      System.out.println("2->Subtraction");
      System.out.println("3->Multiplication");
      System.out.println("4->Division");
      ch=sc.nextInt();

    switch(ch)
    {
        case 1:
        System.out.println("Summation : "+(x+y));
        break;
        case 2:
        System.out.println("Subtration : "+(x-y));
        break;
        case 3:
        System.out.println("Multiplication : "+(x*y));
        break;
        case 4:
        System.out.println("Division : "+(x/y));
        break;
        default:
        System.out.println("Invalid choice");
    }

    }
}