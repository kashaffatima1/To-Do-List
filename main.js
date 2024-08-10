import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            type: 'input',
            name: 'firstquestion', // Specify the 'name' property here
            message: 'What would you like to add in your todos?',
        },
        {
            type: `confirm`,
            name: `secondquestion`, //specify the name property here
            message: "would you like to add more in your todos?",
            default: true,
        }
    ]);
    todos.push(addTask.firstquestion);
    console.log(todos);
    condition = addTask.secondquestion;
}
;
