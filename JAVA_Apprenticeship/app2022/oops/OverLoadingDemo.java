// Polimorphism ------> Over-loading
//

import java.util.*;

class Figure {
    int area(int s) // Area of Square
    {
        return s * s;
    }

    int area(int l, int b) // Area of Rectangle
    {
        return l * b;
    }

    double area(double r) // Area of Circle
    {
        return 3.14 * r * r;
    }
}

class OverLoadingDemo {
    public static void main(String[] args) {
        int s, l, b, a1, a2;
        double r, a3;
        Scanner sc = new Scanner(System.in);
        Figure fig = new Figure();
        System.out.println("Enter side of Square : ");
        s = sc.nextInt();
        System.out.println("Enter length of Rectangle : ");
        l = sc.nextInt();
        System.out.println("Enter breadth of Rectangle : ");
        b = sc.nextInt();
        System.out.println("Enter radius of Circle : ");
        r = sc.nextDouble();
        a1 = fig.area(s);
        a2 = fig.area(l, b);
        a3 = fig.area(r);
        System.out.println("Area of Square = " + a1);
        System.out.println("Area of Rectangle = " + a2);
        System.out.print("Area of Circle = " + a3);
    }
}
