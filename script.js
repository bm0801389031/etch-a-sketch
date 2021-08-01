// this points to my container div element, that holds my grid
const container = document.getElementById('container');
// this points to my clear button element, which resets the grid
const clear = document.getElementById('clear');
// this points to my size button element which, will open
// a popup and take in a integer
const changeSize = document.getElementById('size');

// sets default size of grid
// when the whole page has loaded and the resources
//, will activate the seGrid function
window.addEventListener("load", setGrid);

// refreshes page
// listens to a click on the clear button, 
// and calls location.reload() method, which reloads 
// the current url like the refresh button
clear.addEventListener('click',() => location.reload());

// opens prompt window for user
// listens to a click event and calls newGridSiz function
changeSize.addEventListener('click', newGridSize);

// this function is called when page is done loading,
// calling at the same time both functions defaultGridSize()
// and makeGrid()
function setGrid() {
    defaultGridSize(3);
    makeGrid(3);
}

// creates a grid 
// this function is called by the load listener and setGrid function
// for loop that creates the amount of divs required so if input 
// is 5 meaning size 5x5 we need 25 
// then a document.createElement() with element div
function makeGrid(grid){
    for (let i = 0; i < (grid * grid); i++){
        // first loop, so on so fourth
        // then a document.createElement() with element div
        // this creades the div element for the grid
        const gridItem = document.createElement('div');
        // this adds a class to the div that was created
        gridItem.classList.add('gridItem');
        // this event listener listens to the div for a pointer/mouse
        // that goes over the phesical space of the element 
        // then call changeColor function
        gridItem.addEventListener("mouseenter", changeColor);

        // this adds the gridItem div child in to the 
        // children container div
        container.appendChild(gridItem);
    };
};

// this function styles the container divs
// by adding property gridTemplateColumns which defines the
// amount of columns in a grid and size of column 
// (with the repeat notation/method of course 'repeat()')
function defaultGridSize(grid){
    container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;

}

// this changes the colors of the dives that have the mouse
// go over them, the function is called inside makeGrid function
function changeColor(e){
    e.target.style.backgroundColor = 'black';
}



// function creating new grid size from user's input
// this is the propt that comes up after clicking change size
// button, 
function newGridSize(){
   let pickSize = prompt('Enter a Number');
   // pick size is not equal to null, just a safty mesure: continue
        if (pickSize !== null) {
            // this converts the string passed through the prompt to int
            pickSize = parseInt(pickSize, 10);
            // this makes sure my number passed is greater than 1 and less than 64
            // and that number is a number
            if (pickSize < 1 || pickSize > 64 || Number.isNaN(pickSize)) {
            // this gives a new prompt if the entered number did not work
              alert("Enter a number from 1-64 range");
            // and reruns this parant function/ run runction again"
              newGridSize();
            } else {
                // the function will run this part if everyting
                // went through the prompt properly.
                // the first function to run is to clear the grid
                // the second function is to set the amount of columns by styling
                clearGrid();
                defaultGridSize(pickSize);
                // the third function adds new divs and the style new classes 'for color'..
                // to the divs acording to the number entered in the prompt to the 2nd pow
                makeGrid(pickSize);
            }
        };
}

// clears default grid
function clearGrid() {
    // Array.from creates a shallow copied array from 
    // container elements childNodes
    const gridArray = Array.from(container.childNodes);

    // forEach creates a function on each childNode
    // the function removes the child nodes on each element
    gridArray.forEach((element) => {
    container.removeChild(element);
    });
}  

// re organize
