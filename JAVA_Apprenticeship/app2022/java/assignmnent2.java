import java.util.Scanner;

public class assignmnent2 {
    
    public static void main(String[]args){

int no;
System.out.println( "Tax Calculator APP");
System.out.println("-----WELCOME-----\n");

Scanner scanner =new Scanner (System.in);
System.out.println(" Enter total persont count:");
no= scanner.nextInt();
String[] names =new String[no];

long[] income = new long[no];

for( int counter = 0; counter < no; counter++){
System.out.println("\n Enter name" +(counter+1)+":");
names[counter] =  scanner.next();
System.out.println("Enter "+ names[counter]+"'s Annual Income:");
income[counter] =scanner.nextLong();
}
scanner.close();
System.out.println("\nNames with liable taxes");
System.out.println("--------------------------");
for( int counter = 0; counter< no; counter++){
    System.out.println(names[counter] + " : " + "" + income[counter] );
}
    }
}
