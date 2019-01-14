/*

Loop & Conditions Exercise

Rules:
- Create a function
-- Create a loop from 1 to 100
--- If {n} can be devided by 3 log "Happy"
--- If {n} can be devided by 5 log "Sad"
--- If {n} can be devided by 5 and 3 log "Both"

- Create MORE solutions at least 2
-- Use if-statements
-- Convert in a ternary operator

Sample output:
 
1
2
"Happy"
4
"Sad"
"Happy"
7
8
"Happy"
"Sad"
11
"Happy"
13
14
"Both"
...
continue till 100
 
 */
/*

Loop & Conditions Exercise

Rules:
- Create a function
-- Create a loop from 1 to 100
--- If {n} can be devided by 3 log "Happy"
--- If {n} can be devided by 5 log "Sad"
--- If {n} can be devided by 5 and 3 log "Both"

- Create MORE solutions at least 2
-- Use if-statements
-- Convert in a ternary operator

Sample output:
 
1
2
"Happy"
4
"Sad"
"Happy"
7
8
"Happy"
"Sad"
11
"Happy"
13
14
"Both"
...
continue till 100
 
 */
/* FIRST ATTEMPT


const devidedBy3 ="Happy";
const devidedBy5 ="Sad";
const devidedBy5and3 "both";

SECOND ATTEMPT

if (n / 3){//if {n}cab be divided by 3 log "Happy"
  message = "Happy";
} else if (n / 5){//if {n}cab be divided by 5 log "Sad"
  message = "Sad";
}else if (n / '3','5'){//If {n} can be devided by 5 and 3 log "Both"
  message = "both";
}
*/

//THIRD ATTEMPT

/*
var x = 3;
var y = 5;
var z = x / y;
*/

//FORTH ATTEMTP

/*

for(let i = 1; i <=100; i++){
  if (i % 3 === 0){
    break;
  }if else (i % 5 === 0){
    break;
  }
  
  console.log(i);
}
*/

// FITH ATTEMP
/*
for (x=1; x <= 100; x++){
  if(x % 3==0){
    write("Happy")
  }
  if (x % 5==0){
    write ("Sad")
  }
  if((x % 3 !=0)&&(x % 5 !=0)){
    write(x)
  }
}
 */
//sixth attempt
for (let num = 0; num <= 100; num++) {
  if ((0 == num % 3) && (0 == num % 5)) {
    console.log("Happy and Sad" + "" + num);
  } else if (0 == num % 5) {
    console.log("sad" + "" + num);
  } else if (0 == num % 3) {
    console.log("Happy" + "" + num);
  } else {
    console.log(num);
  }
}