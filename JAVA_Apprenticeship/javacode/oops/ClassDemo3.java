// 

class Employee
{
int empid;                   
// Instance Variable -->Instance Variable ve variable hote hai, jo class ke andar decleare kiye jate hai .  
String empname;     // Instance Variable 
double salary;          // Instance Variable

void setValue(int eid, String ename, double sal)
{
empid=eid;
empname=ename;
salary=sal;
}
void display()
{
System.out.println("Employee Id="+empid);
System.out.println("Employee Name="+empname);
System.out.println("Employee Salary="+salary);
}
}

class Demo3
{
public static void main(String [] args)
{
Employee e1=new Employee();
e1.setValue(1001,"soni nishad",40000.0);
e1.display();
//   
Employee e2=new Employee();
e2.setValue(1002,"soumya nishad",30000.0);
e2.display();
}
}
