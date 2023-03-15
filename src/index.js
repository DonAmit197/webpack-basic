/***
 * For the basic demo I have written the codes here
 * but best practise is to use this file as import
 * It also imports and works for scss and css component files with sass-loader and style-loader
 */

import { NumberTxt, Maintxt } from "./components/number";
//console.log(NumberTxt);
console.log(Maintxt);
let name = " Huen SDa  World";
const message = `how  ${name}`;
console.log(message);

class Circle {
  getNumber() {
    console.log(NumberTxt);
  }
}

const amit = new Circle();
amit.getNumber();
