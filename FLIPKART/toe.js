let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let iniO = true; // player O starts
let won = document.querySelector("#winner");

const cond = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const enable = () => {
    boxes.forEach(box => {
        box.textContent = "";
        box.style.pointerEvents = "auto"; // re-enable clicking
    });
    iniO = true;
};

const disableAll = () => {
    boxes.forEach(box => {
        box.style.pointerEvents = "none"; // stop clicking
    });
};

const checkWinner = () => {
    for (let pattern of cond) {
        let [a, b, c] = pattern;
        let pos1 = boxes[a].textContent;
        let pos2 = boxes[b].textContent;
        let pos3 = boxes[c].textContent;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            console.log("WINNER:", pos1);
            won.innerText = `${pos1} Wins!`;
            disableAll();
            return true;
        }
    }
    return false;
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.textContent === "") {
            box.textContent = iniO ? "O" : "X";
            iniO = !iniO;
            if (checkWinner()) return;
        }
    });
});

reset.addEventListener("click", enable);
