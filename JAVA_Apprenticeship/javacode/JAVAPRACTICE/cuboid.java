import java.util.*;

class cuboid {
    public static void main(String [] args)
    {
        int l,b,h, vol, surface;
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the length,breath, height : ");
        l=sc.nextInt();
        b=sc.nextInt();
        h=sc.nextInt();
        vol = l*b*h;
        surface = 2*(l*b+b*h+h*l); 
        System.out.println("Volume = "+vol);
        System.out.println("Surface = "+surface);
    }
}
