#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation  from "chalk-animation";
import figlet from "figlet";


figlet('Todo List!! ' , function(err , data){
    if(err){
        console.log('Something Went Wrong....');
        console.dir(err);
        return;
    }
        console.log(chalk.green(data));
});




let todolist : string[]=[];

async function RepeateFlow(){
     const answer = await inquirer.prompt([{
        name : "repate",
        type : "list",
        choices: ["Yes" , "No"],
        message: "Do You Want To Another Operation",
}]);

        return (answer.repate === "Yes")?true : false;
}

async function Todolist(){

     let startAgain = true;

    do{
    const answer : {option:string} = await inquirer.prompt([{
    
            name :"option",
            type: "list",
            choices: ["Add items" , "Display" , "Remove Items"],
            message: "what do you want to do?"
}]);



if(answer.option === "Add items"){
    
    const item : {newItem: string} = await inquirer.prompt([{
        name:"newItem",
        type: "input",
        message: "Enter New Item"
}]);

    todolist.push(item.newItem);
     startAgain = await RepeateFlow();
}
 else if(answer.option === "Display"){
    if(todolist.length == 0){
        console.log(chalk.red("Your List Is Empty"));
    }
    todolist.forEach(element => console.log(element));
    console.log(typeof todolist);
    startAgain = await RepeateFlow();
 }

 else if(answer.option === "Remove Items"){
    if(todolist.length == 0){
        console.log(chalk.red("Your List is Already Empty"));
    }
    let removeItem : {item: string} = await inquirer.prompt([
        {
            name: "Item",
            type: "input",
            message: "Which Item You Want To Remove"
        }
    ]);

    let index = todolist.indexOf("removeItem.Item");
    console.log(index);

    if(index !== 1){
        todolist.splice(index,1);
    }
    startAgain = await RepeateFlow();
    
 }
}while(startAgain !== false)
}


setTimeout(() => {
    Todolist();
}, 1000);
