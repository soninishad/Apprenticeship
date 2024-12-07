/*  
 
Salary Calculator
Input :- Basic Slary
Output :- Gross Salary

 */

import java.util.*;

import javax.lang.model.util.ElementScanner14;

class p10 {
    public static void main(String [] args)
     {
        double bs, hra, da, gs;
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter basic salary : ");
        bs=sc.nextDouble();
        if(bs<=4000)
        {
            hra=(bs*10)/100;
            da=(bs*50)/100;
        }
 else if(bs>4000 && bs<=8000)
        {
   hra=(bs*15)/100;
  da=(bs*60)/100;        
    }     
    else if(bs>8000 && bs<=12000)
  {
    hra=(bs*20)/100;
     da=(bs*70)/100;
  }
  else 
  {
    hra=(bs*25)/100;
    da=(bs*80)/100;
  }

}
}
