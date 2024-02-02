const bill = document.getElementById("bill")
const custom = document.getElementById("custom")
const people = document.getElementById("people")
const tip = document.getElementById("tip")
const reset = document.getElementById("reset")
const total = document.getElementById("total")
const five = document.getElementById("five")
const ten = document.getElementById("ten")
const fifteen = document.getElementById("fifteen")
const twenty = document.getElementById("twenty")
const fifty = document.getElementById("fifty")


function tipCalc(value){

console.log(value)
const percent = value / 100
const billAmount = bill.value / people.value;
const tipPerPerson = billAmount * percent;
const billAmountPerson = tipPerPerson * billAmount;




if (
    tipPerPerson &&
    billAmountPerson &&
    percent &&
    bill.value &&
    people.value
){
    reset.removeAttribute("disabled");
}

bill.addEventListener("change", function(){
    console.log("bill", bill.value)
 });
 people.addEventListener("change", function(){
     console.log("people", people.value)
 });
 custom.addEventListener("change", function(){
     console.log("custom", custom.value)
 });


tip.textContent = tipPerPerson.toFixed(2);
total.textContent = billAmountPerson.toFixed(2)
console.log(tip.textContent);

return billAmountPerson.toFixed(2)
}




