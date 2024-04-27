// TODO: include package needed for this application 
const fs = require("fs");
const colors = require("colors");
const inquirer = require("inquirer");
const { title } = require("process");
// const { type } = require("os");

//TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      type: 'input',
      message: 'title:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
     {
      type: 'input',
      message: 'Table of Content:',
      name: 'Table of Content',
    },
    {
      type: 'input',
      message: 'What was your motivation?:',
      name: 'description',
    }, 
    {
      type: 'input',
      message: 'Why did you build this readme?',
      name: 'comments1',
    },
    {
      type: 'input',
      message: 'What problem does it solve?',
      name: 'comments2',
    },
    {
      type: 'input',
      message: 'What did you learn? ',
      name: 'comments3',
    },
    {
      type: 'input',
      message: 'What makes your project stand out?',
      name: 'comments4',
    },
  {
    type:"input",
  message:"What did you install?",
  name:"Installation",
  
  },  
  {type:"input",
  message:"What useage did you have for this readme?",
  name:"Usage",
  
  },  {type:"input",
  message:"What License did you use?",
  name:"License",
  
  },  {type:"input",
  message:"who contributed to this?",
  name:"Contributing",
  
  },  {type:"input",
  message:"Link to github?",
  name:"Github",
  
  }  
  ])

  // aasemble a template literal with the data
  .then((response) =>{
    let examplereadme =`# read_Me_Generator ${response.title}


    ## Description: ${response.description}
    - Why did you build this readme? i built this for me and no one else it might be apart of my modules but i reconize that even this part where you can make you own readme file is valuable. 
    
    - ${response.comments1} 
    by being able to make a readme not from scratch but by one that i choose to make that i feel is easier for me help me keep on track with what i have planned. plus i can always make it just like how we were taught to comment  everything we do to help us out. i feel that this is just like that and will help keep me organize with wether it is a project, moudle or just a regular asssignment. 
    
    - ${response.comments2} 
    i learned by creating this readme it has helped me to make more in the future for my own benifit  and when other people read it hopefully they also can see and read the clearity it has for me as well.
    
    - ${response.comments3} 
    What did you learn? 
    if this makes my life easier in making) this is taught  by our teacher and helped even more by our TA's to better help us as future developers/programmers if it stands out then so be it if it doesn't then oh well as long as other people can read it with clearity  and precision then i am fine with that.

    -${response.comments4}
    What makes your project stand out? (if this makes my life easier in making) this is taught  by our teacher and helped even more by our TA's to better help us as future developers/programmers if it stands out then so be it if it doesn't then oh well as long as other people can read it with clearity  and precision then i am fine with that.

    
    ## Table of Contents:
    
    ## [Installation]: ${response.Installation} i have installed installed inquirer 8.2.4, colors into my index.js 
    
    ## [Usage]:${response.Useage}to help us with node.js with  certain codes to help us achive  with objects, values, to reach the end result.
    
    ## [License]:${response.License} 
    
    ## [Contributing]:${response.name} Jeovan Mills
    
    ## [Github]: ${response.Github}
     `

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
// this => is getting an actual error wants me to turn it into a string
fs.writeFile(`examplereadme.md`,examplereadme ,(err) => err ? console.error(err) : console.log("success"))
});


//TODO: create a function to initialize app
function init() {
    inquirer.createPrompt(questions).then((answer)=>{})
}
