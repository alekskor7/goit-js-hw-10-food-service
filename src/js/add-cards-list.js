import refs from "./refs";
import cardTemplate from "../templates/cards.hbs";
import arrayCards from "../data/menu.json";

const menuCard = cardTemplate(arrayCards);
const cardList = refs.cardListContainer.insertAdjacentHTML('afterbegin', menuCard);
export {cardList}