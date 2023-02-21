import Lottery from "./modules/lottery.js";
import { politicians, folk } from "./data/data.js";

const lottery = new Lottery(politicians); //istanciranje objekta, povezivanje politiciansa s ostalim
lottery.startDrawing();

console.log(lottery);