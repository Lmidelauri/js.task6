import { MyArr } from "./task6.js";

let arr = new MyArr('elem1', 'elem2', 'elem3', 'elem4');
let testArr = arr.lengthMethod()
// console.log(testArr);
let testArr2 = arr.popMethod()
// console.log(testArr2)
let testarr3 = arr.pushMethod('elem5');
// console.log(testarr3)
// console.log(arr.lengthMethod())

const list = [
    { listItem: `massive length: ${testArr}` },
    { listItem: `popped el: ${testArr2}` },
    { listItem: `pushed array: ${testarr3}` },
    { listItem: ` array: ${arr.El}` }
];

let text = "<ul>";
list.forEach(listfunction);
document.getElementById("listEl").innerHTML = text;
function listfunction(value) {
    text += `<li>  ${value.listItem}   </ll>`
};
