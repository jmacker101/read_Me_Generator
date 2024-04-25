// TODO: include package needed for this application 
const fs = require("fs");
const colors = require("colors");
const inquirer = require("inquirer");
// const { type } = require("os");

//TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'what is your location?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'where are you from?:',
      name: 'bio',
    },

  
  {type:"input",
  message:"What is a description of your project",
  name:"Installation",
  
  },  
  {type:"input",
  message:"What is a description of your project",
  name:"Usage",
  
  },  {type:"input",
  message:"What is a description of your project",
  name:"License",
  
  },  {type:"input",
  message:"What is a description of your project",
  name:"Contributing",
  
  },  {type:"input",
  message:"What is a description of your project",
  name:"Test",
  
  }  
  ])

  // aasemble a template literal with the data
  .then((response) =>{
    let examplereadme =` `

const questions = [
    {type: 'input',
    message: 'What is a description of your project',
    name: 'Table of Contents',
},

//     type: "",
//     message: "",
//     name: "",

//     // {Table of Contents}
//     // {Installation},
//     // {Usage},
//     // {License}
//     // {Contributing}
//     // {Tests}
    
];

// TODO: create a fdunction to write readme file
// fs to write file
fs.writeFile(`examplereadme.md`, html, (err) =>
err ? console.error(err) : console.log("success"))
});


//TODO: create a function to initialize app
function init() {
    inquirer.createPrompt(questions).then((answer)=>{})
}
