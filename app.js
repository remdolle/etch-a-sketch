let tailleGrille = 600;
let rows = 16;
let columns = 16;

const grille = document.querySelector("#grille");
grille.style.width = `${tailleGrille}px`;
grille.style.height = `${tailleGrille}px`;



function createGrid() {
    for (let i=1; i<= (rows * columns); i++) {
        const cell = document.createElement("div");
        cell.style.width = `${(tailleGrille/columns-2)}px`;
        cell.style.height = `${(tailleGrille/rows-2)}px`;
        cell.classList.add("element");
        grille.appendChild(cell);   
    }        
     
}

createGrid();

