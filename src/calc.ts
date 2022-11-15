// Q1
import {question} from 'readline-sync'

 type opration ="+" |"-" | "*" |"/"
function main(): void{

const friststr:string= question("please enter your first number /n");
const opration:string =question("please enter your opration /n");
const secondStr:string=question("please enter your secend number /n");



const validinput:Boolean= isitnumber(friststr) && isopration(opration as opration) && isitnumber(secondStr);

if (validinput){
    const fistnum: number = parseInt(friststr);
    const secendnum :number = parseInt(secondStr);
    const result =calulater (fistnum,opration as opration,secendnum)
    console.log("the result" + result)
}
    else
    {

        console.log("/n invalid number ")
           main()
    }
    }
    function calulater(fistnum:number,opration:opration,secendnum:number){
switch (opration){
    case"+" :
    return fistnum+secendnum
        case "-":
            return fistnum-secendnum
            case "*":
                return  fistnum*secendnum
            case "/":
                return fistnum/secendnum


}


    }
function isopration(opration:opration) : Boolean{

    switch(opration){

        case "+":
        case  "-":
            case "*":
            case "/":
                return true;


    }
}

function isitnumber(str:string): Boolean
{
const mabynum= parseInt(str)
const isnum:Boolean = !isNaN(mabynum)
return isnum;
}

// Q2 

interface IUser{
    name : string,
    age : number,
    Specialization: string,
}
const Frind1: IUser ={
name : "Areej",
age: 29,
Specialization: "information system",
}
const Frind2: IUser ={
    name : "Amal",
    age: 29,
    Specialization: "IT",
    }
    const Frind3: IUser ={
        name : "maha",
        age: 29,
        Specialization: "information system",
        }
        
console.log (Frind1.name);
console.log(Frind2.age);
console.log(Frind3.Specialization);