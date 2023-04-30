#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
console.log(chalk.hex('#cd853f')('ASH Word Counter'));
let wordCounter = async () => {
    let myPara = await inquirer.prompt([{
            name: 'content',
            message: "Please type a paragraph to count words:"
        }]);
    const rainbowTitle = chalkAnimation.rainbow(`
                Please wait  ...       
        `);
    rainbowTitle.render();
    // use the \s quantifier to remove all white space
    let remText = myPara.content.replace(/\s/g, "");
    // get the length of the string after removal
    console.log(`${chalk.bgWhiteBright.black.bold('   ' + remText.length + '   words counted in your paragraph.')} `);
    rainbowTitle.stop();
    // ask user if he/she wants to repeat   
    let operation = await inquirer.prompt([
        {
            name: 'repeat',
            type: 'list',
            choices: ["Continue", chalk.red('Exit')],
            message: chalk.hex('#FFA500').bold(`\n\nCount another para?: `)
        },
    ]);
    if (operation.repeat == 'Continue') {
        wordCounter();
    }
    else {
        //do nothing i.e: exits
    }
};
await wordCounter();
