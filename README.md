# Module10-svg-generator

## Description
          
This app generates an .svg file with a customized logos. Pick a shape, its color, enter up to three letters and chose what color the letters will be. This app was created to simplify the process of creating logos for websites.

This is an example .svg logo
![image]("./assets/imgsvglogo)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Installation

Download the github repository and install node.js. Next install any dependencies with the command 
```
npm i
``````
in the terminal. This should install a package.json and a package-lock.json in the directory. Double check in the package.json file that the script "test" says 
```
jest 
```
and that next to dependencies it says
```
inquirer
```


## Usage

To run the application from the terminal use the command
```
node index.js
```
This will prompt the user to answer some questions and generate the README.md file. The user should answer each of the questions to the best of their abilities, the file can always be edited within the actual README file once it has been generated. 

[Watch a video of how the application works](add video of creating an svg)

## License

For more info check [MIT License](https://opensource.org/licenses/MIT)

## Tests

You can test that the app does generate a logo, with a shape; either a triangle, circle or square, and that three letters appear inside the logo. To initiate the test use the command
```
npm run test
```


## Questions

For any issues, please contact me at:
slenorovitz@gmail.com
<br>
Or check out my Github page https://github.com/GypsyBoho