// We create a thread in this program by extending Thread Class .

class Thread1 extends Thread 
{
  // Here we override run() method of Thread class
      public void run() 
{
   for(int i=1; i<=50; i++)
 {
System.out.println(i);
try{
Thread.sleep(500);
}
catch(InterruptedException e)
{

}

}
}
}

class ThreadDemo1
{
public static void main ( String [] args ) throws InterruptedException
{
   Thread1 t=new Thread1();
    t.start();
 for(int i=1; i<=20; i++) 
{
System.out.println("Main : " +i);
Thread.sleep(1000);
}
}
}








