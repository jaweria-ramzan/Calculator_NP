import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.grey(` _____________________________________`));
console.log(chalk.grey(`|   _______________________________   |`));
console.log(chalk.grey(`|  |                               |  |`));
console.log(chalk.grey(`|  |                               |  |`));
console.log(chalk.grey(`|  |_______________________________|  |`));
console.log(chalk.grey(`|   _______ _______ _______ _______   |`));
console.log(chalk.grey(`|  |   1   |   2   |   3   |   +   |  |`));
console.log(chalk.grey(`|  |_______|_______|_______|_______|  |`));
console.log(chalk.grey(`|  |   4   |   5   |   6   |   _   |  |`));
console.log(chalk.grey(`|  |_______|_______|_______|_______|  |`));
console.log(chalk.grey(`|  |   7   |   8   |   9   |   *   |  |`));
console.log(chalk.grey(`|  |_______|_______|_______|_______|  |`));
console.log(chalk.grey(`|  |   .   |   0   |   =   |   /   |  |`));
console.log(chalk.grey(`|  |_______|_______|_______|_______|  |`));
console.log(chalk.grey(`|_____________________________________|`));

const Answer:{
    NumberOne:number,
    NumberTwo:number,
    Operator:string,
}=await inquirer.prompt([
    {
        type:"number",
        name:"NumberOne",
        message:"Enter The First Number: ",
    },
    {
        type:"number",
        name:"NumberTwo",
        message:"Enter The Second Number: ",
    },
    {
        type:"list",
        name:"Operator",
        choices:["+","-","*","/"],
        message:"Select Operator. ",
    },
]);
const {NumberOne,NumberTwo,Operator}=Answer;
if(NumberOne&&NumberTwo&&Operator){
    let Result:number=0;
    if(Operator==="+"){
        Result=NumberOne + NumberTwo
    }else if(Operator==="-"){
        Result=NumberOne - NumberTwo
    }else if(Operator==="*"){
        Result=NumberOne * NumberTwo
    }else if(Operator==="/"){
        Result=NumberOne / NumberTwo
    }
    console.log(chalk.blue("Your Result: ",Result));
}else{
console.log(chalk.red("Enter the Valid Keys."));
    };