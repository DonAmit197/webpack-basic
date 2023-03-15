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
