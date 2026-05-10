let arr = [1, 7, 3, 1, 0, 20, 77];
let stringifiedArr = JSON.stringify(arr);


let spanEl = document.getElementById("updatedArray");
spanEl.textContent = stringifiedArr;

let startIndexInputEl = document.getElementById("startIndexInput");
let deleteCountInputEl = document.getElementById("deleteCountInput");
let itemToAddInputEl = document.getElementById("itemToAddInput");
let spliceBtnEl = document.getElementById("spliceBtn");
spliceBtnEl.onclick = function() {
    if (startIndexInputEl.value === "") {
        alert("enter the start index");
    } else {

        arr.splice(parseInt(startIndexInputEl.value), parseInt(deleteCountInputEl.value), itemToAddInputEl.value);
    }
    console.log("hello bacche");
    spanEl.textContent = arr;
}

// let updatedStringifiedArr=JSON.stringify(arr);
// console.log(updatedStringifiedArr);
// spanEl.textContent=updatedStringifiedArr;