// What are algorithms?

// An Algorithm is:
    // A defined procedure to solve aproblem.

    // The set of steps, that's going to take you from some input to some desired outputs

    // The core study of computer science because it really is applied everywhere.

    // Just like smaller chunks in your program that solve a specific problem.






// Example of Algorithm: Sorting a list of values :

    // Step 1:The first thing that you need to do is to define the inputs and outputs associated with the problemi.e.,
    // what are you going to send to the programme, and what is the programme going to give you in return.

    // Step 2:So,for the input for theprogramme, create alist of n values.

    // Step 3:And then youhave a value to search for, refer itas ‘b’, the output of this search is going to be the 
    // location of the value b inside of the list.

    // Step 4:If the value ‘b’is the first value in the list, you will get back zero, one for the second value, two for 
    // the third value, and so on.



// Note:If you happen  to  not  find  the  value  in  the  list,  since  that's  a  possibility, you will get  a 
// negative one back as a result.






// Problems and Instances
    // The statement of inputs and outputs is called the Problem Statement.

    // It tells you more about the actual problem you are going to solve.

    // Any given input values are an instance of the problem.E.g., In a list of a bunch of numbers and something to 
    // search for in it,  would be considered an instance of the searching problem.

    // Any algorithm that can take a result at some sort of input and produce an expected output would be called 
    // correct. 

    // So, if it could take an input and turn it into the desired outputs every single time, that is a correct

    // algorithm.






// How to Find a Good Solution?
    // Whenever it’s said, Algorithms, that's intentional, almost every single problem that you encounter is  going  
    // to  have  more  than  one  way  to  solve  it.

    // There's  never  usually  just  like  one  solution  to computer problems, there's usually many solutions to 
    // those problems.
    
    // So, one of the big things that you are going to do with algorithms is to try to get an understanding to pick the 
    // best solution.






// There are many algorithms that exist for a particular problem, you need to be able to evaluate these solutions. And 
// these evaluations are going to be based on:
    // i.Efficiency
    // ii.Space Complexity
    
    // Efficiency:It tells you how long it takes for an algorithm to execute i.e., how many steps does it need to take 
    // to execute and get a solution
    
    // Space Complexity:The space complexity tells you how much space the algorithm needs to solve its problem. It's 
    // like how much memory it needs to consume to solve its problem.
    
    // The reason why you should care about space complexity is that you may have a smaller computer  with  less  
    // memory space  available  to  it.  So,  in  those  situations,  you  need  to optimize the space complexity to 
    // make sure that it takes up as little space as possible.
    
    // The setup can run on minimal hardware, the efficiency aspect is more. So, when you don't really care as much about the hardware memory, you care more about how fast things are executing.






// Idea of Efficiency and How its Evaluated?•There  is  a    need  to  evaluate  efficiency  in  a  very  specific  //
// way.  Some  people  make  the mistake of saying, “Okay, let me run it on my computer and see how long it takes on my 
// computer, and that's the efficiency of the programme”. It is not a great approach to take. And the reason being is 
// because the way that your computer run something, and the way that someone else's computer runs, something is 
// different.•If  you  have  more  hardware  than  someone  else,  it  may  run  fast  on  your  computer,  but slow  
// on  someone  else's.  While  discussing  about  efficiency  from  an  algorithm’s perspective, you mustlook at 
// objective efficiency, theefficiency that is the agnostic of the hardware that it's running on. •And  because  of  
// this,  the  efficiency  that  you  look  at  in  algorithms  tend  to  be  very mathematical compared to just timing 
// it.•So that's something to really keep in mind that finding a good solution is both different indicators should be 
// agnostic of your hardware.1.5Example: Searching of Number1.Search for the number seven in the list 1,3,5,7,9:Step 
// 1:The simplest approach to this would be to start at the beginning of the list, move all the way to the end of the 
// list. And, stoppingonce you find the number or you reach the end of the list, whichever one comes first.Step 2:In 
// this sort of sequential approach, compare every single number to the one that you are searching for. Step 3:Go 
// through one by one, till you get 7. You willsee in this case, it took a total of four comparisons, including the one 
// check the final number where it's equal to seven.So, four operations need to be done to reach the resultin this case.
// 2.Similarly searching for 10 in {1,3,5,7,9}, we must search through every single number and at the end, we say, 
// well, we didn't find it. In this case, the efficiency was relatively slow compared to finding the number. 3.The  
// worst  case  of  this  algorithm  is  when  you  don't  find  the  number,  because  you  have  to search it through 
// every single entry inside of our lists. If you have a list that has n numbers inside of it, it means that you have 
// to do ‘n’ comparisons in order to find the value that you are looking forin the worst case.
// 4.Also, the efficiency is relatively slow compared to finding the number. So, you can see that in some cases, the 
// efficiency for finding the number versus not finding the number are different from each other.






// For the problem of searching a number in the list, what best describes the output of the problem?
// If the value is found, the index of the value is returned or else -1 is returned.



// An algorithm will translate an input into a desired output.



// The statement of input and output is called problem statement.