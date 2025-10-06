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
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"), // ✅ versi lama pakai contentBase
    compress: true,
    port: 3000,
  },
};

import React from "react";
import Introduction from "./introduction";
import Home from "./pages/home";

function App(){
    return(
        <div>
            <Introduction/>
            <Home/>
            <h1>Hai</h1>
            <p>haiiii saya sedang belajar React</p>
        </div>
    )
}

export default App;




"# belajar-coding-dari-0" 

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";

import Navbar from "./component/navbar";
import Footer from "./component/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

import BorderRadius from "autoprefixer/lib/hacks/border-radius";
import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
      <nav style={{ backgroundColor: "#333", color: "white", padding: "1rem 2rem" }}>
        <ul style={{ listStyle: "none", display: "flex", gap: "2rem" }}>
          <li><a href="/" style={{ color: "white", textDecoration: "none", background: "darkorange",
 BorderRadius: "8px"}}>Home</a></li>
          <li><a href="/projects" style={{ color: "white", textDecoration: "none" }}>Projects</a></li>
          <li><a href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
        </ul>
      </nav>

      <main style={{ padding: "2rem", minHeight: "70vh" }}>
        <h1>Hai, Perkenalkan nama saya Habib.</h1>
        <p>Selamat datang di website portofolio React pertama saya.</p>
      </main>

      <footer style={{ backgroundColor: "#333", color: "white", padding: "1rem 2rem", textAlign: "center" }}>
        &copy; 2025 Habib
      </footer>
    </div>
  );
}

export default App;

