let currentPlayer = "X";

// Tableau pour savoir les cases remplies
const currentGame = ["","","","","","","","",""];

// Tableau des combinaisons gagnantes
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const info = document.querySelector(".info");
info.textContent = `Au tour de ${currentPlayer}`;

// On appelle la focntion handleClick en fonction de la case sur laquelle on a cliqué
const cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
    cell.addEventListener("click", handleClick);
});

// Bouléen pour bloquer le jeu (après une victoire par exemple)
let lock = false;

function handleClick(e) {
    const clickBox = e.target;
    const boxIndex = clickBox.getAttribute("data-index");

    // Pour ne pas jouer 2 fois sur la même case
    if(currentGame[boxIndex] != "" || lock === true) {
        return;
    }

    currentGame[boxIndex] = currentPlayer;
    clickBox.textContent = currentPlayer;

    verification();
}

function verification() {

    for (let i = 0; i < winningCombinations.length; i++) 
    {
        const combinationCheck = winningCombinations[i];

        let a = currentGame[combinationCheck[0]];
        let b = currentGame[combinationCheck[1]];
        let c = currentGame[combinationCheck[2]];

        // Verifie s'il y a eu une victoire (avec le tableau des combinaisons gagantes)
        if (a === "" || b === "" || c === "") { continue; }
        else if (a === b && b === c) {
            info.textContent = `Victoire du joueur ${currentPlayer} ! Appuyer sur F5 pour rejouer.`;
            lock = true;
            return;
        }
    }

    // Verifie s'il y a eu un match nul
    if (!currentGame.includes("")) {
        lock = true;
        info.textContent = `Match nul, personne n'a gagné ! Appuyer sur F5 pour rejouer.`;
        return
    }

    switchPlayer();
}

function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    info.textContent = `Au tour de ${currentPlayer}`;
}




































/*let currentPlayer = "X";

const info = document.querySelector('.info');
info.textContent = `Au tour de ${currentPlayer}`;

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('click', handleClick));

const currentGame = ["","","","","","","","",""];
let lock = false;

function handleClick(e) {
    const clickBox = e.target;
    const boxIndex = clickBox.getAttribute("data-index");

    if(currentGame[boxIndex] !== "" || lock) {
        return;
    }

    currentGame[boxIndex] = currentPlayer;
    clickBox.textContent = currentPlayer;
    
    verification();
}

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function verification() {
    for(let i = 0; i < winningCombinations.length; ++i)
    {
        const combinationCheck = winningCombinations[i];

        let a = currentGame[combinationCheck[0]];
        let b = currentGame[combinationCheck[1]];
        let c = currentGame[combinationCheck[2]];
    

        if (a === "" || b === "" || c === "") {
            continue;
        }
        else if (a === b && b === c) {
            info.textContent = `Le joueur ${currentPlayer} a gagné ! Appuyer sur F5 pour recommencer.`;
            lock = true;
            return;
        }
    }

    // Match nul, toutes les cases sont prises sans gagnants
    if (!currentGame.includes("")) {
        info.textContent = `Match nul ! Appuyer sur F5 pour recommencer.`;
        lock = true;
        return;
    }

    switchPlayer();
}

function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "0" : "X";
    info.textContent = `Au tour de ${currentPlayer}`;
}

// le mien*/






