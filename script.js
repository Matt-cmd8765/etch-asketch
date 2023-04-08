// Initial calling of the makeGrid function
makeGrid();

// Call the slider by it's ID
let slider = document.getElementById('myRange');

// Function for when the slider value changes
slider.onchange = function () {
    // Delete the old grid
    const gridle = document.querySelectorAll('.grid');
    gridle.forEach((div) => {
        div.remove();
    });
    // set slider value in html to the new value 
    let val = this.value;
    slider.setAttribute('value', `${val}`);
    // Remake the grid
    makeGrid();
}

// To make the Grid
function makeGrid() {
    //get the value of the slider. 
    let sliderValue = document.getElementById('myRange').value;
    let sliderOutput = document.getElementById('slidevalue');
    sliderOutput.textContent = `${sliderValue}`;
    let gridSize = sliderValue;

    //Create div # based on the slider value
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.querySelector('#square');
            const grid = document.createElement('div');
            grid.classList.add('grid');
            square.appendChild(grid);
        }
    }
    //select all divs that were created
    const gridSizer = document.querySelectorAll('.grid');

    //This defines how big each div in the square will be. 
    gridSizer.forEach( (divs) => {
        let size = 32/gridSize;
        divs.style.height = `${size}vw`;
        divs.style.width = `${size}vw`;
    });
}

//Make rainbow colored squares
const rgb = document.getElementById('rgb');
rgb.addEventListener('click', function () {
    const changeColor = document.querySelectorAll('.grid');
    let mouseisdown = false;
    //Loop through node list
    changeColor.forEach( (grid) => {
        //change background color of each div when mouse is down over divs. 
        grid.addEventListener('mouseenter', function() {
            grid.addEventListener('mousedown', function(){mouseisdown = true;});
            grid.addEventListener('mouseup', function() {mouseisdown = false});
            if (mouseisdown) {
                let rainbow1 = Math.floor(Math.random() * 255);
                let rainbow2 = Math.floor(Math.random() * 255);
                let rainbow3 = Math.floor(Math.random() * 255);
                grid.style.backgroundColor = `rgb(${rainbow1},${rainbow2},${rainbow3})`;
            }
        });
    });
});

//Make black colored squares
const black = document.getElementById('black');
black.addEventListener('click', function () {
    const changeColor = document.querySelectorAll('.grid');
    let mouseisdown = false;
    //Loop through node list
    changeColor.forEach( (grid) => {
        //change background color of each div when when mouse is down over divs. 
        grid.addEventListener('mouseenter', function() {
            grid.addEventListener('mousedown', function(){mouseisdown = true;});
            grid.addEventListener('mouseup', function() {mouseisdown = false});
            if (mouseisdown) {
                grid.style.backgroundColor = 'black';
            }
        });
    });
});

//eraser button
const eraser = document.getElementById('eraser');
eraser.addEventListener('click', function () {
    const changeColor = document.querySelectorAll('.grid');
    let mouseisdown = false;
    changeColor.forEach((grid) => {
        // erases when mouse is down over the divs
        grid.addEventListener('mouseenter', function() {
            grid.addEventListener('mousedown', function(){mouseisdown = true;});
            grid.addEventListener('mouseup', function() {mouseisdown = false});
            if (mouseisdown) {
                grid.style.backgroundColor = '';
            }
        });
    })
})


// clear button
const clear = document.getElementById('clear');
clear.addEventListener('click', function (e) {
    const changeColor = document.querySelectorAll('.grid');
    changeColor.forEach((grid) => {
        grid.style.backgroundColor = '';
    })
})

