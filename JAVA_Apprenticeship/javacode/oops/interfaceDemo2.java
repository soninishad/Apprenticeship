//First Meeting

interface School
{
void registration();
void feeSubmission();
void batchAllotment();
}

//Second Meeting
abstract class Test1 implements School
{
public void registration()
{
System.out.println("Business Login of registration");
}
}

// Third Meeting
abstract class Test2 extends Test1
{
public void feeSubmission()
{
System.out.println("Business Logic of FeeSubmission");
}
}

// Fourth Meeting
class Test3 extends Test2
{
public void batchAllotment()
{
System.out.println("Bussiness Logic of batch allotment ");
}
}

// Testing
class InterfaceDemo2
{
public static void main(String [] args)
{
Test3 t = new Test3();
t.registration();
t.feeSubmission();
t.batchAllotment();
}
}