/**************** start  problem 1  *****************/

// let number  =  + prompt("Enter your number") ;
// console.log(number);

/**************** end  problem 1  ******************/ 


/**************** start  problem 2  *****************/

// let number  =  + prompt("Enter your number") ;
// if( number % 3 === 0 ||  number % 4 === 0 ) console.log("Yes");
// else  console.log("No");

/**************** end  problem 2  ******************/ 


/**************** start  problem 3  *****************/

// let num1  =  + prompt("Enter number 1") ;
// let num2  =  + prompt("Enter number 2") ;
// if(num1 >= num2) console.log(num1);
// else console.log(num2);

/**************** end  problem 3  ******************/ 


/**************** start  problem 4  *****************/

// let num1  =  + prompt("Enter number 1") ;
// if(num1<0) console.log("negative");
// else console.log("positive");

/**************** end  problem 4  ******************/ 


/**************** start  problem 5  *****************/

// let maxNumber = Number.MIN_VALUE  ;  
// let minNumber = Number.MAX_VALUE  ; 
// for(let i  = 1  ; i<=3  ; i++)
// {
//     let number  =  + prompt(`Enter number ${i}`) ;
//     if(number > maxNumber) maxNumber = number ; 
//     if(number < minNumber) minNumber = number ;
// }
// console.log("max element = " + maxNumber);
// console.log("min element = " + minNumber);

/**************** end  problem 5  ******************/ 


/**************** start  problem 6  *****************/

/*** Solution 1 ***/
// let number  =  + prompt("Enter your number") ;
// if(number%2==0) console.log("even");
// else console.log("odd");

/*** Solution 2  (bit mask) ***/
// let number  =  + prompt("Enter your number") ;
// if(number&1) console.log("odd");
// else console.log("even");

/*** Solution 2 (Ternary operation) ***/ 
// let number  =  + prompt("Enter your number") ;
// console.log( (number&1)? "odd" : "even" );

/**************** end  problem 6  ******************/ 


/**************** start  problem 7  *****************/

// let character = prompt("Enter your character") ;  
// character =  character.toLowerCase() ; 
// if(character==="o" || character==="u" || character==="i" || character==="e" || character==="a") 
// {
//     console.log("vowel");
// }
// else
// {
//     console.log("Consonant");
// } 

/**************** end  problem 7  ******************/


/**************** start  problem 8  *****************/

/*** Solution 1 ***/
// let number  =  + prompt("Enter your number") ;
// for(let i=1 ; i<number ; i++)
// {
//     console.log(i + ", ");
// }
// console.log(number);

/*** Solution 2 ***/
// let number  =  + prompt("Enter your number") ;
// let array = [];
// for(let i = 1; i <= number; i++)
// {
//     array.push(i);
// }
// console.log(array.join(','));

/**************** end  problem 8  ******************/


/**************** start  problem 9  *****************/

/*** Solution 1 ***/
// let number  =  + prompt("Enter your number") ;
// for(let i=1 ; i<=12 ; i++)
// {
//     console.log(number*i);
// }

/*** Solution 2 ***/
// let number  =  + prompt("Enter your number") ;
// let array = [];
// for(let i = 1; i <= 12; i++)
// {
//     array.push(number*i);
// }
// console.log(array.join(' '));

/**************** end  problem 9  ******************/


/**************** start  problem 10  *****************/

/*** Solution 1 ***/
// let number  =  + prompt("Enter your number") ;
// for(let i=2  ; i<=number ; i+=2) console.log(i);

/*** Solution 2 ***/
// let number  =  + prompt("Enter your number") ;
// let array =  [] ; 
// for(let i=2  ; i<=number ; i+=2) array.push(i) ; 
// console.log(array.join(" "));

/**************** end  problem 10  ******************/


/**************** start  problem 11  *****************/

/*** Solution 1 ***/
// let num1  =  + prompt("Enter number 1") ;
// let num2  =  + prompt("Enter number 2") ;
// console.log(num1 ** num2);

/*** Solution 2 ***/
// let num1  =  + prompt("Enter number 1") ;
// let num2  =  + prompt("Enter number 2") ;
// let  res = 1 ;  
// for(let i =1 ; i<= num2 ; i++)  res *= num1 ; 
// console.log(res);

/*** Solution 3 (backtracking)  :)  ***/
// function power(n , p)
// {
//     if(p === 0) return  1 ;  
//     if(p === 1) return  n ;
//     let t  =  power(n , Math.floor(p / 2)) ;
//     console.log(t);
//     console.log("p" + p);
    
    
//     let res =  t * t ;
//     if(p  % 2 === 1) res *= n ; 
//     return res ;       
// }
// let num1  =  + prompt("Enter number 1") ;
// let num2  =  + prompt("Enter number 2") ;
// console.log(power(num1 , num2));

/**************** end  problem 11  ******************/


/**************** start  problem 12  *****************/

// let Total =  0  ; 
// for(let i =1 ;  i<=5  ; i++)
// {
//     let  number  = +prompt(`Enter number ${i}`)
//     Total +=  number  ; 
// }
// console.log("Total marks = " + Total);
// console.log("Averge Marks = "+ Total/5);
// console.log("Percentage = " + Total/500*100 + "%");

/**************** end  problem 12  ******************/


/**************** start  problem 13  *****************/

/* 1->31 2->(28-29) 3->31 4->30 5->31 6->30 7->31 8->31 9->30 10->31 11->30 12->31*/

// function Kabisa(year)
// {
//     let diff = (year>=2024)? year-2024 :  2024 - year ;
//     return (diff%4===0)? true  : false ;    
// }

/*** Solution 1 ***/
// let monthNumber =  +prompt("Enter the month number "); 
// if(monthNumber === 1) console.log("Days in Month: 31");
// else if(monthNumber === 2)
// {
//     let yearNumber =  +prompt("Enter the year number "); 
//     console.log((Kabisa(yearNumber))?"Days in Month: 29":"Days in Month: 28");
// } 
// else if(monthNumber === 3) console.log("Days in Month: 31");       
// else if(monthNumber === 4) console.log("Days in Month: 30");       
// else if(monthNumber === 5) console.log("Days in Month: 31");       
// else if(monthNumber === 6) console.log("Days in Month: 30");       
// else if(monthNumber === 7) console.log("Days in Month: 31");       
// else if(monthNumber === 8) console.log("Days in Month: 31");       
// else if(monthNumber === 9) console.log("Days in Month: 30");       
// else if(monthNumber === 10) console.log("Days in Month: 31");       
// else if(monthNumber === 11) console.log("Days in Month: 30");       
// else  console.log("Days in Month: 31");       


/*** Solution 2 ***/
// let monthNumber =  +prompt("Enter the month number ");
// if(monthNumber <= 7) 
// {
//     if(monthNumber === 2)
//     {
//         let yearNumber =  +prompt("Enter the year number "); 
//         console.log((Kabisa(yearNumber))?"Days in Month: 29":"Days in Month: 28");
//     } 
//     else console.log((monthNumber&1)? "Days in Month: 31" : "Days in Month: 30");  
// } 
// else console.log((monthNumber&1)? "Days in Month: 30" : "Days in Month: 31");


/*** Solution 3 ***/
// let array = [31,28,31,30,31,30,31,31,30,31,30,31] ;  
// let monthNumber =  +prompt("Enter the month number ");
// if(monthNumber === 2 ) 
// {
//     let yearNumber =  +prompt("Enter the year number "); 
//     console.log((Kabisa(yearNumber))?"Days in Month: 29":`Days in Month: ${array[monthNumber-1]}`);
// }
// else  console.log(`Days in Month:${array[monthNumber-1]}`);

/**************** end  problem 13  ******************/


/**************** start  problem 14 *****************/

// let  sum = 0 ; 
// let  perc = 0 ; 
// let Total = 500 ; 
// let array = ["Physics" , "Chemistry" , "Biology" ,"Methematics" , "Computer"] ;  
// for(let i =0  ; i<5 ; i++)
// {
//     let mark  = +prompt(`Enter the ${array[i]} degree`) ; 
//     sum += mark ; 
// }
// perc = sum/Total*100 ; 
// console.log("percentage : " +  perc + " % " );

// if(perc >= 90) console.log("Grad A");
// else if(perc >= 80) console.log("Grad B");
// else if(perc >= 70) console.log("Grad C");
// else if(perc >= 60) console.log("Grad D");
// else if(perc >= 40) console.log("Grad E");
// else console.log("Grad F");


/**************** end  problem 14  ******************/


/**************** start  problem 15 *****************/

// function Kabisa(year)
// {
//     let diff = (year>=2024)? year-2024 :  2024 - year ;
//     return (diff%4===0)? true  : false ;    
// }

// let monthNumber =  +prompt("Enter your number") ;  
// switch(monthNumber)
// {
//     case 1 :
//         console.log("Days in Month: 31"); 
//         break  
//     case 2  : 
//         let yearNumber =  +prompt("Enter the year number "); 
//         console.log((Kabisa(yearNumber))?"Days in Month: 29":"Days in Month: 28");
//         break  ;  
//     case 3 :  
//         console.log("Days in Month: 31"); 
//         break
//     case 4 :  
//         console.log("Days in Month: 30"); 
//         break
//     case 5 :  
//         console.log("Days in Month: 31"); 
//         break
//     case 6 :  
//         console.log("Days in Month: 30"); 
//         break
//     case 7 :  
//         console.log("Days in Month: 31"); 
//         break
//     case 8 :  
//         console.log("Days in Month: 31"); 
//         break
//     case 9 :  
//         console.log("Days in Month: 30"); 
//         break
//     case 10 :  
//         console.log("Days in Month: 31"); 
//         break
//     case 11 :  
//         console.log("Days in Month: 30"); 
//         break
//     case 12 :  
//         console.log("Days in Month: 31"); 
//         break
//     default :
//         console.log("try again"); 
// }

/**************** end  problem 15  ******************/


/**************** start  problem 16 *****************/

// let character = prompt("Enter your character") ;  
// character =  character.toLowerCase() ; 
// switch(character)
// {
//     case "o":  
//         console.log("vowel");
//         break ; 
//     case "a":  
//         console.log("vowel");
//         break ; 
//     case "e":  
//         console.log("vowel");
//         break ; 
//     case "u":  
//         console.log("vowel");
//         break ; 
//     case "i":  
//         console.log("vowel");
//         break ; 
//     default :
//         console.log("Consonant");
// }

/**************** end  problem 16  ******************/


/**************** start  problem 17 *****************/

// let num1 =  +prompt("Enter number 1") ; 
// let num2 =  +prompt("Enter number 2") ; 
// switch (true) {
//     case num1>=num2 :
//         console.log("max number : " + num1);
//         break;
//     default:
//         console.log("max number : " + num2);
// }

/**************** end  problem 17  ******************/


/**************** start  problem 18 *****************/

// let number =  +prompt("Enter your number") ; 
// switch(true)
// {
//     case (number%2==0) :  
//         console.log("even");
//         break; 
//     default :  
//         console.log("odd");  
// }

/**************** end  problem 18  ******************/


/**************** start  problem 19 *****************/

// let number =  +prompt("Enter your number") ; 
// switch(true)
// {
//     case (number>0) :  
//         console.log("positive");
//         break; 
//     case (number<0) :  
//         console.log("Negative");
//         break; 
//     default :  
//         console.log("zero");  
// }

/**************** end  problem 19  ******************/


/**************** start  problem 20 *****************/

/*** Solution 1 ***/
// console.log("Choose process");
// console.log("1 - (+)");
// console.log("2 - (-)");
// console.log("3 - (*)");
// console.log("4 - (/)");
// console.log("5 - (**)");
// let  choose =  + prompt("Process number : ") ; 
// switch (choose) {
//     case 1:
//         let  res1  = 0  ; 
//         let count1 =  +prompt("count of number"); 
//         for(let  i  =1 ; i<=count1  ; i++)
//         {
//             let number =  +prompt(`Enter number ${i}`); 
//             res1  += number ; 
//         }
//         console.log("result = " + res1);
//         break;
//     case 2:
//         let  f_Number=0 ; 
//         let count2 =  +prompt("count of number"); 
//         let Num1=  +prompt("Enter number 1");
//         f_Number = Num1 ;   
//         for(let  i  =2 ; i<=count2  ; i++)
//         {
//             let number =  +prompt(`Enter number ${i}`); 
//             f_Number  -= number ; 
//         }
//         console.log("result = " + f_Number);
//         break;
//     case 3:
//         let  res3  = 1  ; 
//         let count3 =  +prompt("count of number"); 
//         for(let  i  =1 ; i<=count3  ; i++)
//         {
//             let number =  +prompt(`Enter number ${i}`); 
//             res3  *= number ; 
//         }
//         console.log("result = " + res3);
//         break;
//     case 4:
//         let  firstNumber=1 ; 
//         let count4 =  +prompt("count of number"); 
//         let num1 =  +prompt("Enter number 1");
//         firstNumber = num1 ;   
//         for(let  i  =2 ; i<=count4  ; i++)
//         {
//             let number =  +prompt(`Enter number ${i}`); 
//             firstNumber  /= number ; 
//         }
//         console.log("result = " + firstNumber);
//         break;
//     case 5:
        
//         let number1 =  +prompt("Enter number 1"); 
//         let number2 =  +prompt("Enter number 2");
//         console.log("result = " + number1 ** number2);
//         break;
//     default:
//         console.log("please , try  again");
//         break;
// }

/*** Solution 2 ***/
// let  process =   prompt(" Enter your Process ") ;
// console.log(eval(process));

/**************** end  problem 20  ******************/










