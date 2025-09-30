"BARU BELAJAR BANG"
let fullName = 'Habib ahmad faqih';
let FirstName = "habib";
let midName = 'ahmad';
let lastName = 'faqih';

document.writeln(fullName);
document.writeln(FirstName);
document.writeln(midName);
document.writeln(lastName);

console.log(fullName);
console.log(FirstName);
console.log(midName);
console.log(lastName);


const app = "belajar js";

document.writeln(app);

app = "belajar js";

let result = 2+1;
document.writeln("<P> 2 + 1 = " + result +  "<P>");
 let originalResult = result; //3

result = result -=1; //2
document.writeln("<p>" + originalResult + "-1 =" + result + "</p>");

result = result *=2; //2
document.writeln("<p>" + originalResult + "*2 =" + result + "</p>");


/* .intro p {
    display: inline-block;
    margin: 0 10px;
} */

{
  "name": "my-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --mode development --open",
    "build": "webpack --mode production"
  },

  "keywords": [],
  "author": "Habib",
  "license": "ISC",
  "dependencies": {
    "create-react-app": "^4.0.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "@babel/core": "7.12.10",
    "@babel/preset-env": "7.12.11",
    "@babel/preset-react": "7.12.10",
    "babel-loader": "8.1.0",
    "html-webpack-plugin": "4.5.2",
    "webpack": "4.44.2",
    "webpack-cli": "3.3.12",
    "webpack-dev-server": "3.11.3"
  },
  "description": ""
}



