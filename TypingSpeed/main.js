let tableauElements = [
    "The experience of life's impermanence is a great lesson. For those of you who are suffering " +
    "may this experience become an opportunity to wake up to the Truth beyond impermanence.",

    "The doorway soon absorbed her boxes, and she gave me her hand and a smile, and said good-night, " +
    "and was absorbed likewise. And still I stood looking at the house, thinking how happy I should be if I lived there with her, " +
    "and knowing that I never was happy with her, but always miserable.",

    "You know what that means? It's Latin. It means, \"know thyself.\" I'm gonna let you in on a little secret " +
    "Being the One is just like being in love. " +
    "No one can tell you you're in love, you just know it. Through and through. Balls to bones."
];

let chronoElement = document.querySelector("#chrono > b"),
    text = document.querySelector("#text"),
    board = document.querySelector("#board"),
    refaire = document.querySelector("#refaire"),
    intervalOftime = null,
    tableData = null;

function traitement() {
    tableData = tableauElements[Math.round(Math.random() * (tableauElements.length - 1))];
    text.textContent = "" + tableData;
};

traitement();

var temp = {
    Minutes: 0,
    Secondes: 0,
    MliSecondes: 0
};

var changeTemp = () => {

    temp.MliSecondes++;
    if (temp.MliSecondes % 100 === 0) {
        temp.Secondes++;
        temp.MliSecondes = 0;
        if (temp.Secondes % 60 === 0) {
            temp.Minutes++;
            temp.Secondes = 0;
        }
    }

    chronoElement.textContent = `${(temp.Minutes < 10) ? "0" + temp.Minutes : temp.Minutes}:${(temp.Secondes < 10) ? "0" +
        temp.Secondes : temp.Secondes}:${(temp.MliSecondes < 10) ? "0" + temp.MliSecondes : temp.MliSecondes}`;
}

board.addEventListener("keyup", (e) => {

    if (intervalOftime === null)
        intervalOftime = setInterval(changeTemp, 10);

    if (tableData.trim().indexOf(e.target.value.trim()) === 0) {
        if (board.classList.contains("faild"))
            board.classList.remove("faild");
        board.classList.add("sucess");
        if (tableData.trim() === e.target.value.trim()) { clearInterval(intervalOftime) };
    } else {
        if (board.classList.contains("sucess"))
            board.classList.remove("sucess");
        board.classList.add("faild");
    }
});

refaire.addEventListener("click", (e) => {
    traitement();
    clearInterval(intervalOftime);
    temp.MliSecondes = 0;
    temp.Minutes = 0;
    temp.Secondes = 0;
    chronoElement.textContent = `00:00:00`;
    intervalOftime = null;
    board.value = "";
    board.classList.remove("sucess", "faild");
});