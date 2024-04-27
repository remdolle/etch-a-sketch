let tailleGrille = 600;
let rows = 10;
let columns = rows;
const container = document.querySelector("#container");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



function createGrid(rows,columns) {
    const grille = document.querySelector(".grille");
    grille.remove();
    const newGrid  = document.createElement("div");
    newGrid.classList.add("grille");
    container.appendChild(newGrid);

    newGrid.style.width = `${tailleGrille}px`;
    newGrid.style.height = `${tailleGrille}px`;

    for (let i=1; i<= (rows * columns); i++) {
        const cell = document.createElement("div");
        cell.style.width = `${tailleGrille/columns-2}px`;
        cell.style.height = `${tailleGrille/rows-2}px`;
        cell.classList.add("element");
        newGrid.appendChild(cell);
        
        cell.addEventListener("mouseover",(e)=>{
            e.target.style.backgroundColor = getRandomColor();
        });

    }         
}


createGrid(rows,columns);

const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click",()=>{
    let rows = Number(prompt("enter the number of rows required : "));

    while (rows > 100) {
        rows = Number(prompt("Can't be larger than 100 ! "));
    }
    columns = rows;
    createGrid(rows,columns);
})

