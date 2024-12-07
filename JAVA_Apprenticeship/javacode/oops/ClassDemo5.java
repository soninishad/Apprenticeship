//  Constructor


class Student
{
int rollno;
String name;
double fee;

Student(int rollno, String name, double fee )// Constructor
{
}

void display()
{
System.out.println("Roll No="+rollno);
System.out.println("Name="+name);
System.out.println("Fee="+fee);
}
}

class Demo4
{
public static void main(String [] args)
{
Student s=new Student(1001,"soni",2000.0);
s.display();
}
}
