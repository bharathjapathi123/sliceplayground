Splice Playground

The Splice Playground is a beginner-friendly JavaScript project that demonstrates the working of the Array.splice() method interactively. Users can modify an array by entering a start index, delete count, and item to add.

Features
Display initial array
Add new elements into the array
Remove elements from the array
Replace existing elements
Real-time updated array display
Simple and responsive UI using Bootstrap
Technologies Used
HTML5
CSS3
Bootstrap 4
JavaScript
Project Structure
project-folder/
│
├── index.html
├── sliceplayground.css
└── sliceplayground.js
How It Works

The application uses the JavaScript splice() method:

array.splice(startIndex, deleteCount, itemToAdd)
Inputs
Start Index → Position where changes begin
Delete Count → Number of elements to remove
Item To Add → New element inserted into the array
Example

Initial Array:

[1, 7, 3, 1, 0, 20, 77]

User Input:

Start Index: 2
Delete Count: 1
Item To Add: 50

Updated Array:

[1, 7, 50, 1, 0, 20, 77]
JavaScript Logic
Button Click Event
spliceBtnEl.onclick = function() {
    if (startIndexInputEl.value === "") {
        alert("enter the start index");
    } else {
        arr.splice(
            parseInt(startIndexInputEl.value),
            parseInt(deleteCountInputEl.value),
            itemToAddInputEl.value
        );
    }

    spanEl.textContent = arr;
}
Learning Outcomes=
By building this project, you can learn:

DOM Manipulation
Event Handling
JavaScript Arrays
Working with splice()
User Input Handling
Dynamic UI Updates
Future Improvements
Add input validation
Support multiple items addition
Show deleted elements separately

