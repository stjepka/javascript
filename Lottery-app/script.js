import Lottery from "./modules/lottery.js";
import { politicians, folk } from "./data/data.js";

const buttonStartLotteryEl = document.querySelector('.button-start-lottery');
const lottteryResultsEl = document.querySelector(".lottery-results");
const winningCombinationEl = document.querySelector(".winning-combination");
const winningMessageEl = document.querySelector(".winners-message");
const winnersEl = document.querySelector(".winners");

const lottery = new Lottery(politicians); //istanciranje objekta, povezivanje politiciansa s ostalim

buttonStartLotteryEl.addEventListener("click", function () {
    buttonStartLotteryEl.disabled = true;
    buttonStartLotteryEl.innerText = "Lottery drawing in progress...."
    lottery
    .startDrawing()
    .then((result) => {
        winningCombinationEl.innerText = `Winning combo was: ˘${result.winningCombination}`;
    })
    .catch((result) => {
     
    })

    .finally(() => {
        buttonStartLotteryEl.disabled = false;
        buttonStartLotteryEl.innerText = "Start lottery drawing"
    });
});