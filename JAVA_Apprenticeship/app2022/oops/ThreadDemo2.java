// In this program we will create thread by  implementing Runnable Interface .

import java.util.*;

class Thread2  implements Runnable
{
// Here we implement run() method
public void run()
{
for(int i=1; i<=50; i++)
{
System.out.println(i);
}
}
}

class ThreadDemo2
{
public static void main ( String [] args )
{
  Thread2 t2 = new Thread2();
  Thread t = new Thread(t2);
  t.start();

for(int i=1; i<=20; i++) 
{
System.out.println ( "Main code : "+i );
}
}
}



