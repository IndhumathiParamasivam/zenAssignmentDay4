//Task 1: comparing two JSON have the same properties without order
var obj1 = { Name: "Person 1", age:5 };
        var obj2 = { age:5, namE: "Person 1"};
        let obj1_Keys = Object.keys(obj1);
        let obj2_Keys = Object.keys(obj2);
        let i,j;
        if(obj1_Keys.length == obj2_Keys.length)
        {
            for( i = 0 ; i < obj1_Keys.length; i++)
            { 
                for ( j = 0; j < obj2_Keys.length; j++)
                {
                    if( obj2_Keys[j] === obj1_Keys[i])
                        break;
                }
                if(j==obj2_Keys.length)
                  break;
            }
            if( i == obj1_Keys.length)
            console.log("Both JSON objects have same keys");
            else
            console.log("Keys are not matching for both JSON Objects");
        }
        else
            console.log("Keys are not matching for both JSON Objects");
            console.log("obj1_Keys : ",obj1_Keys,"obj2_Keys : ",obj2_Keys);


//Task 2: Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
//Task3:Use the same rest countries and print all countries name, region, sub region and population
let xmlhttp = new XMLHttpRequest();
//step 2 or step 8
xmlhttp.responseType="json";
xmlhttp.open('GET','https://restcountries.eu/rest/v2/all');

xmlhttp.onload = () =>
    {
        let responsedata = xmlhttp.response;
        let body_tag = document.querySelector('body');
        //let responseinJSON = JSON.parse(responsedata);
        console.log(responsedata);
        responsedata.map(country =>
        {  console.log("Country :",country["name"],"flag : ", country.flag);
            document.body.innerHTML += `<div><h3>${country.name}</h3>
                                        <img src=${country.flag}></div>`;
           //Printing country name,region,subregion and population
            console.log("Country :",country["name"],"Region : ", country.region,"Subregion : ", country.subregion,"Population : ",country.population);
        });
        
    }
    xmlhttp.send();

//Task 4:https://medium.com/@reach2arunprakash/www-guvi-io-zen-d395deec1373

//Declare four variables without assigning values and print them in console

let a,b,c,d;


console.log("Priniting the values before assigning :");
console.log("a =",a,";b =",b,";c =",c,";d =",d);

//getting value of the variable myvar as output

var myvar= 1;
console.log("myvar",myvar);

//Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstName = "Indhu";
let lastName = "Paramasivam";
let maritalStatus = "single";
let age ="25 years";

//Declare variables to store your first name, last name, marital status, country and age in a single line
let details = {firstName : "Indhu",lastName : "Paramasivam",maritalStatus : "single",age : "25"};

//Declare variables and assign string, boolean, undefined and null data types
let stringvalue = "abc";
let boolenvalue = true;
let undefinedvalue;
let nullvalue = null;
console.log(typeof stringvalue, typeof boolenvalue,typeof undefinedvalue,typeof nullvalue);

//Convert the string to integer

console.log("Using ParseInt:",parseInt(age));

console.log("Using Number : ", Number(age));

console.log("Using + :", +details.age );


//Write 6 statement which provide truthy & falsey values.

// comparing only values
console.log(parseInt(age)  == details.age);

// comapring datatype and values
console.log(parseInt(age) === details.age);

console.log(boolenvalue);

console.log(parseInt(age)>25);

console.log(typeof age !="boolean");

console.log(!true);

//Square of a number

console.log(Math.pow(3,2));

a=5;
b=8;

//Swapping 2 numbers
console.log("Before Swapping...a =",a,";b =",b);
c=a;
a=b;
b=c;
console.log("After Swapping.. a=",a,";b =",b);

//Addition of 3 numbers

console.log("Addition of 3 numbers ",a+b+c);

//Celsius to Fahrenheit conversion
let degreeincelsius = 40;

console.log(degreeincelsius,"degree In Fahrenheit :",1.8*degreeincelsius+32);

//Meter to miles

let meter=300;

console.log(meter,"meter is equal to ",0.000621371*meter,"miles");

//Pounds to kg

let pounds=120

console.log(pounds," pounds is equal to ",0.453592*pounds,"kg");

//Calculate five test scores and print their average

let scores=[90,89,80,87,99];
let sum = scores.reduce( (initialsum,val)=> {
            return val+initialsum},0);
console.log("Average of the test scores",sum/5);

//Power of any number x ^ y.
console.log("Power of numbers : ", Math.pow(5,8));

//Calculate Simple Interest

let p =1000,n=2,rate=1.5;
console.log("Simple Interest",(p*n*rate)/100);

//Calculate area of an equilateral triangle
let side=10;
console.log("Area of equilateral Triangle: ",(Math.sqrt(3)*a*a)/4);

//Area Of Isosceles Triangle
let height=30;
console.log("Area Of Isosceles Triangle: ",0.5*side*height);

//Volume Of Sphere
let r=4;
console.log("Volume Of Sphere : ",(4*3.17*r*r)/3);

//Volume Of Prism
let lengthofbase=4;
let widthofbase=3;
let areaofbase = lengthofbase*widthofbase;
console.log("Volume Of Prism : ",areaofbase*height);

//Area Of Triangle
console.log("Area Of Triangle: ",0.5*side*height);

//Give the Actual cost and Sold cost, Calculate Discount Of Product
let ActualCost = 300;
let SoldCost = 200;
console.log("Discount of the product ", (ActualCost-SoldCost)*100/ActualCost," % ");

//Given their radius of a circle and find its diameter, circumference and area.
console.log("Diameter of the circle: ",2*r);
console.log("Area of the circle :",3.17*r*r);
console.log("Circumference of the circle : ",3.17*2*r);

//Given two numbers and perform all arithmetic operations
console.log("Addition : " ,a-b);
console.log("Substraction : " ,a-b);
console.log("Multiplication : " ,a*b);
console.log("Division : " ,a/b);

//Display the asterisk pattern as shown below(No loop needed)

console.log("*****\n".repeat(5));

//Calculate electricity bill?

let powerinwatt=100;
let rateperunit=10;
let powerinkwatt= powerinwatt/100;
console.log("Bill for 1 month is RS.", powerinkwatt*rateperunit*30);

//Program To Calculate CGPA

let gpa = [9,8,9,8.7,8.6,9,7,8];

console.log("CGPA is",(gpa.reduce( (sum,val)=> {
    return val+sum;
    })/gpa.length).toFixed(1));

//Write a loop that makes seven calls to console.log to output the following triangle:

for (let i =1;i<=7;i++)
{
    console.log('#'.repeat(i));
}

//Iterate through the string array and print it contents

var strArray= ["<option>Jazz</option>","<option>Blues</option>","<option>New Age</option>","<option>Classical</option>","<option>Opera</option>"];
let str;
for(let i = 0;i<strArray.length;i++)
    strArray[i]=strArray[i].replaceAll(/<\/?option>/g,'');

console.log(strArray);

//to count the elements in the array
var myarray=[11,22,33,44,55]
sum = myarray.reduce( (initialsum,val)=> {
    return val+initialsum;
    },0);
console.log("Sum of the elements",sum);

//Declare an empty array;

let myArr = [];

//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.

let foods = ['Dosa','Idli','poori','upma','chapathi','lemon rice','curdrice','Uttapam','paniyaram','parotta','chilliparotta','kothuparotta','ladoo','Payasam','Adhirasam','Halwa','Jamun','rasgulla','icecream','chocolate'];

//Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
console.log("Fifth favorite food :",foods[4]);

//Starting from the existing friends variable below, change the element that is currently "Mari" to "Munnabai".
let friends = [ "Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
    function dataHandling(input){
    for (var i = 0; i < input.length; i++) 
    {
        if(input[i] === "Mari")
            input[i]="Munnabai";
    }
    }
    console.log(friends);
    dataHandling(friends);
    console.log(friends);

//Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

console.log("Print the names till you meet CaptianAmerica : ");
function dataHandling1(input){
    for (var i = 0; i < input.length; i++) {
        if(input[i]!="CaptianAmerica")
           console.log(input[i]);
        else
            break;
    }
    }
    dataHandling1(friends);

//Find the person is ur friend or not

    function dataHandling2(input, name){
        console.log("Is",name," a frnd");
        for (var i = 0; i < input.length; i++) 
        {
            if(input[i]===name)
                return 'yes';
        }
        return 'no';
        }
        let found = dataHandling2(friends,'Jeff');
        console.log(found);

//We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list

var friends1 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
var friends2 = ["Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET"];
function dataHandling3(input1,input2)
{
    console.log(friends1.concat(friends2).sort());
}
    dataHandling3(friends1,friends2);

//Get the first item, the middle item and the last item of the array

console.log(friends);
console.log("First Item :",friends[0]);
if(friends.length%2 == 0)
    console.log("Middle Items :",friends[(friends.length/2)-1],friends[friends.length/2]);
else
    console.log("Middle Item :",friends[(friends.length-1/2)]);
console.log("Last Item :",friends[friends.length-1]);

//Add your name to the end of the friends array, and add another name to beginning.

friends.push("Indhu");
friends.unshift("Sree");
console.log(friends);

//Add Mr or Ms to the names in the friends array.
let title;
for (let index in friends1)
{
    if(friends1[index] =='CaptianAmerica' || friends1[index] =='Munnabai' || friends1[index] =='AAK chandran')
        title='Mr.';
    else
        title='Ms.';
    friends1[index] = title+friends1[index];
}

console.log("Adding Mr or Ms to the names in the friend1 array",friends1);

//Concat all the names the friends array and return as comma "," seperated string.
console.log(friends.join(','));

//Find the friends names who has letter ‘a’ and return the list.
let friendswithA = friends.filter(friend =>{
    return friend.match(/a+/);
});

console.log(friendswithA);

//Find the avg length of all the friends names. Get the individual length of the names and do the avg.
let sumofnameslength = friends.reduce((initial,friends) =>{
    return initial+friends.length;
},0);


console.log("Avereage length of the friends names :",sumofnameslength/friends.length);

//Find the names and return the list starting with letter M.
console.log("Friends Name starts with 'M' :",friends.filter( friend => friend.match(/^M/)));

//Find the name with max characters and return the name.
console.log("Friend Names with Max characters :",friends.filter(friend => friend.length==(Math.max(...friends.map(friend => friend.length)))));

//Find the name with min characters and return the name.
console.log("Friend Names with Min characters :",friends.filter(friend => friend.length==(Math.min(...friends.map(friend => friend.length)))));

const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];

let friendsInfoonlyInt = friendsInfo.map(val => parseInt(val)).filter( val => !Number.isNaN(val));
console.log("Average of only numbers in friendsInfo:",friendsInfoonlyInt.reduce( (total,num)=> { return total+num})/friendsInfoonlyInt.length);

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ];

//Print the contents of the input variable
    function dataHandling4(input){
    for (var i = 0; i < input.length; i++) {
            for( var j =0 ;j<input[i].length;j++)
                console.log(input[i][j]);
    }
    }
    dataHandling4(input);

//output
//myobject = {1:one,"11":1,"name":"arun"} --> since one is a string, it should be enclosed.So it thows error 
//console.log(myobject.11);  --> Error
//console.log(myobject.name); --> Arun

//Add a new key value pair to myobject
myobject = {1:"one","11":1,"name":"arun"};
myobject.ten="ten";
console.log(myobject);

//Write out an object literal to represent the data below
let companyInfo ={CompanyFirstName : "Guvi", CompanySecondName : "Geek", Address: "6,IIT-M RP,Chennai"};

//How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.) 
//Ans : Array of JSON Objects -->[{},{},{}....]
